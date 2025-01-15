import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
   const [query, setQuery] = useState('');

   const handleSearch = () => {
       if (query) onSearch(query);
   };

   return (
       <div className="SearchBar">
           <input
               type="text"
               placeholder="Pesquise músicas"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
           />
           <button onClick={handleSearch}>Pesquisar</button>
       </div>
   );
};

export default SearchBar;