import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import testImage from '../images/testimages/science-in-hd-4pM4nhHyo9M-unsplash.jpg'
let images = [];
<<<<<<< HEAD
let galleryOutput=[]; //This is for displaying what is output to gallery.
async function addImages() {
    console.log("adding images");
    for (let i = 0; i < 67; i++) {
=======
var doneLoading = false;
function getData(data) {
    console.log("Parsing through data");
    for (let i = 0; i < data.length; i++) {
>>>>>>> 1ad756ce3a0639cfe7f65ac0541a8bcc9c8223a2
        images[i] = {
            src: data[i].ImageUri,
            thumbnail: data[i].ImageUri,
            thumbnailWidth: Number(data[i].imageWidth),
            thumbnailHeight: Number(data[i].imageHeight),
            caption: data[i].captions,
            tags: [{value: data[i].tags}]
        }
    }
    //Added an element with an additional tag for testing if the filtering works.
    images[67] = {
        src: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnail: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Scalpel" }, { value: "Stabby Thing" }, { value: "Pointy" }, {value: "cutty Thing"}, {value: "Very Sharp Knife"}],
            caption: "This tool cuts people open"
    }
  doneLoading = true;
};

//Filters image vector (defined above) by tag
let tagsTogether='';
async function filterImages(searchFilter){
    //let tagsTogether=''; This string will concatenate all the tags together so that using indexOf will return
                        // true if the search input contains any of the tags. This will be used to determine
                        // which images are kept by the .filter() method.
    galleryOutput=images.filter((image) =>{
        var tagsTogether=image.tags[0].value+' '; //Reinitialzing to first tag
        for(let i=0;i<image.tags.length;i++){
            
            tagsTogether=tagsTogether.concat(image.tags[i].value+' ');
        }                                                                           //Separating tags by spaces so as to avoid
                                                                                    //erroneously true positive returns.
        if(tagsTogether.toLowerCase().indexOf(' '+searchFilter.toLowerCase()) >=0 ) return true; //If "search" exists in tags prevent this element
                                                                                           // from being filtered out. Note that the search
                                                                                           // filter is appended with a space so that words
                                                                                           // containing the filter but don't match the filter
                                                                                           // are not returned (e.g., searching "ode" will not
                                                                                           // return true for a tag of "cathode")
        else return false;  //Else return the image
    })
}

function ImGallery(props) {
    addImages();
    filterImages(props.search);
function ImGallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    if (isLoading) {
        fetch('https://medcypher.azurewebsites.net/api/data/Dr.%20Mohammad')
            .then(res => res.json())
            .then(response => {
                setData(response);
                getData(response);
                console.log(data);
                if (doneLoading)
                    setIsLoading(false);
            }).catch(e => { console.log(e) });
    }
    return (
<<<<<<< HEAD
        <Gallery images={galleryOutput} />
=======
        <div>
            {isLoading ? <p>Loading Data</p> : <Gallery images={images} />}

        </div>
>>>>>>> 1ad756ce3a0639cfe7f65ac0541a8bcc9c8223a2
    );

}
export default ImGallery;