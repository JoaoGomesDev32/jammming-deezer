import React from 'react';
import Track from '../Track/Track';

const SearchResults = ({ tracks, onAdd }) => {
   return (
       <div className="SearchResults">
           <h2>Resultados da Pesquisa</h2>
           {tracks.map((track) => (
               <Track
                   key={track.id}
                   track={track}
                   onAction={onAdd}
                   actionText="Adicionar"
               />
           ))}
       </div>
   );
};

export default SearchResults;
