import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
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
            images[i].tags[j] = { value: data[i].tags[j] };
        }
    }

    //Added an element with an additional tag for testing if the filtering works.
    // images[data.length] = {
    //     src: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
    //     thumbnail: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
    //     thumbnailWidth: 320,
    //     thumbnailHeight: 212,
    //     tags: [{ value: "Scalpel" }, { value: "Stabby Thing" }, { value: "Pointy" }, { value: "cutty Thing" }, { value: "Very Sharp Knife" }],
    //     caption: "This tool cuts people open"
    // }
    doneLoading = true;
};

//Filters image vector (defined above) by tag
let tagsTogether = '';
async function filterImages(searchFilter) {
    //let tagsTogether=''; This string will concatenate all the tags together so that using indexOf will return
    // true if the search input contains any of the tags. This will be used to determine
    // which images are kept by the .filter() method.
    galleryOutput = images.filter((image) => {
        var tagsTogether = image.tags[0].value + ' '; //Reinitialzing to first tag
        for (let i = 0; i < image.tags.length; i++) {
            tagsTogether = tagsTogether.concat(image.tags[i].value + ' ');
        }                                                                           //Separating tags by spaces so as to avoid
        //erroneously true positive returns.
        if (tagsTogether.toLowerCase().indexOf(' ' + searchFilter.toLowerCase()) >= 0) return true;
        //If "search" exists in tags prevent this element
        // from being filtered out. Note that the search
        // filter is appended with a space so that words
        // containing the filter but don't match the filter
        // are not returned (e.g., searching "ode" will not
        // return true for a tag of "cathode")
        else return false;  //Else return the image
    })
}

function ImGallery(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    if (isLoading) {
        fetch('https://medcypher.azurewebsites.net/api/data/Dr.%20Mohammad')
            .then(res => res.json()) // converts to json
            .then(response => {
                setData(response.data); //Set the data hook with API respnose data
                getData(response.data); //Populates the image array
                if (doneLoading)
                    setIsLoading(false); //once done loading image array, then set the loading hook with false
            }).catch(e => { console.log(e) });
    }
    //filterImages(props.search); //Filtering image array based on search input
    return (
        <div>
            {isLoading ? <p>Loading Data</p> : <Gallery images={images} />}
        </div>
    );
}
export default ImGallery;