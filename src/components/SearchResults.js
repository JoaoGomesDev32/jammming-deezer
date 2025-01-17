import React from 'react';
import Track from './Track';

const SearchResults = ({ tracks, onAdd }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {tracks.length > 0 ? (
                <ul>
                    {tracks.map(track => (
                        <li key={track.id}>
                            <Track track={track} onAdd={onAdd} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tracks found.</p>
            )}
        </div>
    );
};

export default SearchResults;