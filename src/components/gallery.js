import React from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import testImage from '../images/testimages/science-in-hd-4pM4nhHyo9M-unsplash.jpg'
let images = [];
async function addImages() {
    console.log("adding images");
    for (let i = 0; i < 67; i++) {
        images[i] = {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
            caption: "Boats (Jeshu John - designerspics.com)"
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