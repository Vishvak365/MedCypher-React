import React, { useState, StyleSheet } from 'react';
import './App.css';
import MenuAppBar from './components/appbar/appbar.js';
import ImGallery from './components/gallery.js';

function App() {
  const [search, setSearch] = useState(''); //For use in filtering ImgGallery
  //const [results, setResults] = useState(); //For displaying proper number of results. Currently unused.
  return (
    <div className="App">
      <MenuAppBar setSearch={setSearch}/>
      <div style = { {flex: 1, frameBorder : 1, }}> 
      <ImGallery search={search}></ImGallery>
      </div>
    </div>
  
  );
}

export default App;
