import React from 'react';
import './App.css';
import MenuAppBar from './components/appbar/appbar.js';
import ImGallery from './components/gallery.js';


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
