import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/PlayList/Playlist';
import DeezerAPI from './services/DeezerAPI';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";

const App = () => {
   const [searchResults, setSearchResults] = useState([]);
   const [playlist, setPlaylist] = useState([]);

   const search = async (query) => {
       const results = await DeezerAPI.searchTracks(query);
       setSearchResults(results);
   };

   const addTrack = (track) => {
       if (!playlist.find((t) => t.id === track.id)) {
           setPlaylist([...playlist, track]);
       }
   };

   const removeTrack = (track) => {
       setPlaylist(playlist.filter((t) => t.id !== track.id));
   };

   return (
       <div className="App">
            <Header />
           <SearchBar onSearch={search} />
           <SearchResults tracks={searchResults} onAdd={addTrack} />
           <Playlist playlist={playlist} onRemove={removeTrack} />
           <Footer />
       </div>
   );
};

export default App;
