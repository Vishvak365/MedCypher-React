import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import { Dimmer, Loader } from 'semantic-ui-react';

let images = [];
let galleryOutput = []; //This is for displaying what is output to gallery.
var doneLoading = false;
function getData(data) {
    console.log("Parsing through data");
    for (let i = 0; i < data.length; i++) {
        images[i] = {
            src: data[i].imageUri,
            thumbnail: data[i].imageUri,
            thumbnailWidth: data[i].imageWidth,
            thumbnailHeight: data[i].imageHeight,
            caption: data[i].captions,
            tags: [],
        };
        //console.log(images[0].tags);
        for (let j = 0; j < data[i].tags.length; j++) {
            images[i].tags[j] = {
                value: data[i].tags[j],
                title: data[i].tags[j]
            };
        }
    }

    //Added an element with an additional tag for testing if the filtering works.
    images[data.length] = {
        src: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
        thumbnail: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Scalpel" }, { value: "Stabby Thing" }, { value: "Pointy" }, { value: "cutty Thing" }, { value: "Very Sharp Knife" }],
        caption: "This tool cuts people open"
    }
    doneLoading = true;
};

//Filters image vector (defined above) by tag
async function filterImages(searchFilter, total) {
    //let tagsTogether=''; This string will concatenate all the tags together so that using indexOf will return
    // true if the search input contains any of the tags. This will be used to determine
    // which images are kept by the .filter() method.
    searchFilter = searchFilter.toLowerCase();
    searchFilter = searchFilter.replace(",", "");
    searchFilter = searchFilter.trim();
    var array1 = searchFilter.split(" ");
    var check = true;
    var match = 0;

    galleryOutput = images.filter((image) => {
       
        // var str = image.tags[0].value;
        // str = str.toLowerCase();
        // var x = searchFilter.indexOf(str);
        
        // var tagsTogether = image.tags[0].value + ' '; //Reinitialzing to first tag
        // for (let i = 0; i < image.tags.length; i++) {
        //     tagsTogether = tagsTogether.concat(image.tags[i].value + ' ');
        // }
        // tagsTogether = tagsTogether.toLocaleLowerCase();  
        match = 0;
        if (searchFilter === "") {return true;}
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < image.tags.length; j++)
            {
                if (image.tags[j].value.toLowerCase().indexOf(array1[i].toLowerCase()) >= 0)
                {
                    match = match +1;
                }
            }
            // if ((tagsTogether.indexOf(array1[i].toLowerCase() < 0) && searchFilter != "" ))
            // {
            //     check = false;
            // }
            // else 
            // {
            //     check = true;
            // }
        } 
        if (match <= image.tags.length && match !== 0)
        {
            if (match < array1.length)
            {return false;}
            return true;
        }
        return false   


                                                                                 //Separating tags by spaces so as to avoid
        //erroneously true positive returns.
        // image.thumbnailHeight = image.thumbnailHeight*(total - galleryOutput.length);
        // image.thumbnailWidth = image.thumbnailWidth*(total - galleryOutput.length);
        // if (images.length ==1 )
        // {
        //     image.thumbnailWidth = 1000; //image.imageWidth;
        //     image.thumbnailHeight = image.imageHeight;
        // }
        //if (tagsTogether.toLowerCase().indexOf(' ' + searchFilter.toLowerCase()) >= 0) return true;
            //If "search" exists in tags prevent this element
            // from being filtered out. Note that the search
            // filter is appended with a space so that words
            // containing the filter but don't match the filter
            // are not returned (e.g., searching "ode" will not
        // return true for a tag of "cathode")
        
       // else {
        
        // return false;  //Else return the image
        // } 
        
        //return check;
    })
}

function ImGallery(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    if (isLoading) {
        fetch('https://medcypher.azurewebsites.net/api/data')
            .then(res => res.json()) // converts to json
            .then(response => {
                setData(response.data); //Set the data hook with API respnose data
                getData(response.data); //Populates the image array
                console.log(data);
                if (doneLoading)
                    setIsLoading(false); //once done loading image array, then set the loading hook with false
            }).catch(e => { console.log(e) });
    }
    var total;
    var rows = undefined;
    filterImages(props.search, total); //Filtering image array based on search input
    if (galleryOutput.length === 1)
    {total = galleryOutput[0].thumbnailHeight;
    }
    
    else if (galleryOutput.length < images.length*0.25 && galleryOutput.length !== 0)
    {total = 500;
    }
    else if (galleryOutput.length < images.length*0.5 && galleryOutput.length !== 0)
    {total = 300;
    }
    else {total = 180;}

    

    // galleryOutput = images.filter((image) => {
    //     image.thumbnailHeight = image.thumbnailHeight*(data.length - galleryOutput.length);
    //     image.thumbnailWidth = image.thumbnailWidth*(data.length - galleryOutput.length);

    //     return true;
    // })
    //if loading, show loader with dimmed background, else show the gallery with images
    return (
        <div>
            {isLoading ?
                <Dimmer active>
                    <Loader />
                </Dimmer> :
                <Gallery images={galleryOutput} rowHeight = {total} margin = {3}
                />}
        </div>
    );
}
export default ImGallery;