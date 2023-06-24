import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>;
    } else {
    return (
        <>
            {results.map((image) => (
                <img className="card-image" src={image} alt="spaceImage" />
            ))}
    
            <p>Search Result</p>
        </>
        );
    }
};

export default SearchResults;