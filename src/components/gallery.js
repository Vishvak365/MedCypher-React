import React, { useState, useEffect } from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
import { wait } from '@testing-library/react';
//import useAxios from 'axios-hooks'

let images = [];
let datas = [];

function axiosTest() {
    //axios.get('https://jsonplaceholder.typicode.com/users').then(data => {console.log(data);});
}
async function addImages() {
    console.log("adding images");
    for (let i = 0; i < 1; i++) {
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
function getData(data) {
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        
    }
}
function ImGallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    if (isLoading)
        fetch('http://medcypher.azurewebsites.net/api/doctors')
            .then(res => res.json())
            .then(response => {
                setData(response);
                setIsLoading(false);
            });
    return (
        <div>
            {isLoading ? <p>Loading Data</p> : getData(data)}
        </div>
    );

}
export default ImGallery;