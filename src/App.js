import React, { useState } from 'react';
import './App.css';
import MenuAppBar from './components/appbar/appbar.js';
import ImGallery from './components/gallery.js';

function App() {
  const [search, setSearch] = useState(''); //For use in filtering ImgGallery
  const [results, setResults] = useState(); //For displaying proper number of results. Currently unused.
  return (
    <div className="App">
      <MenuAppBar setSearch={setSearch} results={results} />
      <ImGallery search={search}></ImGallery>
    </div>
  );
}

export default App;
