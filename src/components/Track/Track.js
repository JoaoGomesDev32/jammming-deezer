import React from 'react';
import './Track.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Track({ track, onAction, actionText }) {
    const handleAction = () => onAction(track);
    return (
        <div className="Track">
            <div>
                <h3>{track.title}</h3>
                <p>{track.artist.name}</p>
            </div>
            <button onClick={handleAction}>
                <FontAwesomeIcon icon={faPlus} /> {actionText}
            </button>
        </div>
    );
}

// const Track = ({ track, onAction, actionText }) => {
//    const handleAction = () => onAction(track);

//    return (
//        <div className="Track">
//            <h3>{track.title}</h3>
//            <p>{track.artist.name}</p>
//            <button onClick={handleAction}>{actionText}</button>
//        </div>
//    );
// };

export default Track;
