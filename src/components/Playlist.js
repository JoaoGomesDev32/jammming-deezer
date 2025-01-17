import React from 'react';

const Playlist = ({ playlistName, playlist, onRemove, onSave }) => {
    return (
        <div className="playlist">
            <h2>{playlistName}</h2>
            <ul>
                {playlist.map((track) => (
                    <li key={track.id}>
                        <span>{track.name} - {track.artist}</span>
                        <button onClick={() => onRemove(track)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={onSave}>Save Playlist</button>
        </div>
    );
};

export default Playlist;