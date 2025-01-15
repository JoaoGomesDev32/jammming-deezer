import React from 'react';
import Track from '../Track/Track';
import './Playlist.css';

const Playlist = ({ playlist, onRemove }) => {
   return (
       <div className="Playlist">
           <h2>Sua Playlist</h2>
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
