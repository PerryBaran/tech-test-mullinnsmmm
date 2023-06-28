import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
    console.log(results);
    if(!results) {
        return <p></p>
    } else if (!results.length) {
        return <p className="results-message">No results</p>
    } else {
    return (
        <>
        <div className="search-results">
            {results.map((result) => (
                <img 
                key={result}
                className="card-image" 
                src={ result } 
                alt="spaceImage" />
            ))}
            </div>
        </>
        );
    }
};

export default SearchResults;