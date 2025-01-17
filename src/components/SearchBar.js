import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSearch = () => {
        onSearch(term);
        setTerm('');
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a track..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;