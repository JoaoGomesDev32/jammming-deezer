import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { searchTracks } from './services/api';

const App = () => {
    const [playlist, setPlaylist] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState('My Playlist');

    const search = async (term) => {
        const results = await searchTracks(term);
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

    const savePlaylist = () => {
        alert(`Playlist "${playlistName}" saved with ${playlist.length} tracks!`);
        setPlaylist([]);
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={search} />
            <SearchResults tracks={searchResults} onAdd={addTrack} />
            <Playlist playlistName={playlistName} playlist={playlist} onRemove={removeTrack} onSave={savePlaylist} />
            <Footer />
        </div>
    );
};

export default App;