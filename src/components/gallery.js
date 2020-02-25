import React from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import testImage from '../images/testimages/science-in-hd-4pM4nhHyo9M-unsplash.jpg'
let images = [];
async function addImages() {
    console.log("adding images");
    for (let i = 0; i < 67; i++) {
        images[i] = {
            src: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnail: "http://www.gannett-cdn.com/-mm-/d415e49dbee251019f24a0ea55f95947a2bb1072/c=29-0-425-298&r=x404&c=534x401/local/-/media/2016/01/02/DetroitFreePress/DetroitFreePress/635873333613566290-surgery-ThinkstockPhotos-470454993.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Scalpel" }, { value: "Stabby Thing" }, { value: "Pointy" }],
            caption: "This tool cuts people open"
        }
    }
};
function ImGallery() {
    addImages();
    return (
        <Gallery images={images} />
    );
}
export default ImGallery;