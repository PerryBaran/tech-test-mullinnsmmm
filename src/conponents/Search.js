import React, { useState } from 'react';
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = () => {
    const [value, setValue] = useState();

    handleSubmit(onSubmit)(event.preventDefault())

    getImages(value);
    
    return (
        <>
    <form className="search-form" onSubmit={handleSubmit(event)}>
            <input 
            className="search-input" 
            type="text" 
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
            Go!
        </button>
    </form>
    </>
    );
};

export default Search;