import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';//https://www.npmjs.com/package/react-grid-gallery
//import useAxios from 'axios-hooks'
let images = [];
var doneLoading = false;
function getData(data) {
    console.log("Parsing through data");
    for (let i = 0; i < data.length; i++) {
        images[i] = {
            src: data[i].ImageUri,
            thumbnail: data[i].ImageUri,
            thumbnailWidth: Number(data[i].imageWidth),
            thumbnailHeight: Number(data[i].imageHeight),
            caption: data[i].captions,
            tags: [{value: data[i].tags}]
        }
    }
    doneLoading = true;
}
function ImGallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    if (isLoading) {
        fetch('http://medcypher.azurewebsites.net/api/data/Dr.%20Mohammad')
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
        <div>
            {isLoading ? <p>Loading Data</p> : <Gallery images={images} />}

        </div>
    );

}
export default ImGallery;