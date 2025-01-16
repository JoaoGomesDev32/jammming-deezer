import React from 'react';
import Track from '../Track/Track';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, playlist, onRemove, onSave }) => {
   return (
       <div className="Playlist">
           <h2 className="playlist-title">{playlistName || "Sua Playlist"}</h2>
           {playlist.map((track) => (
               <Track
                   key={track.id}
                   track={track}
                   onAction={onRemove}
                   actionText="Remover"
               />
           ))}
       </div>
   );
};

export default Playlist;
