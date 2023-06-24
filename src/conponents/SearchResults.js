import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>;
    } else {
    return (
        <>
        <div className="search-results">
            {results.map((result) => (
                <img className="card-image" src={ result } alt="spaceImage" />
            ))}
    
            <p>Search Result</p>
            </div>
        </>
        );
    }
};

export default SearchResults;