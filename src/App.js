import React from 'react';
import './App.css';
import MenuAppBar from './components/appbar/appbar.js';
import ImGallery from './components/gallery.js';
let images = {};
async function addImages() {
  console.log("adding images");
  for (let i = 0; i < 1; i++) {
    images[i] = {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      caption: i + 1 + "Test",
    }
  }
}

function App() {
  addImages();
  return (

    <div className="App">
      <MenuAppBar></MenuAppBar>
      <ImGallery></ImGallery>
    </div>
  );
}

export default App;
