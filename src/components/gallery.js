import React from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import testImage from '../images/testimages/science-in-hd-4pM4nhHyo9M-unsplash.jpg'


let images = [];
let galleryOutput=[]; //This is for displaying what is output to gallery.
async function addImages() {
    console.log("adding images");
    for (let i = 0; i < 67; i++) {
        images[i] = {
            src: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnail: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Scalpel" }, { value: "Stabby Thing" }, { value: "Pointy" }, {value: "cutty Thing"}],
            caption: "This tool cuts people open"
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
    return (
        <Gallery images={galleryOutput} />
    );
}
export default ImGallery;