import React from 'react';
import './App.css';
import MenuAppBar from './components/appbar/appbar.js';
import SearchAppBar from './components/searchbar/searchbar.js';
import ImGallery from './components/gallery.js';


function App() {
  return (

    <div className="App">
      <MenuAppBar/>
      <ImGallery></ImGallery>
    </div>
  );
}

export default App;
