import React from 'react';

const Track = ({ track, onAction, actionText }) => {
   const handleAction = () => onAction(track);

   return (
       <div className="Track">
           <h3>{track.title}</h3>
           <p>{track.artist.name}</p>
           <button onClick={handleAction}>{actionText}</button>
       </div>
   );
};

export default Track;
