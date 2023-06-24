import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../conponents/SearchResults";

describe("Search Results", () => {
    it("renders correctly", () => {
        const results = [];
        const { asFragment } = render(<SearchResults results={results}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});