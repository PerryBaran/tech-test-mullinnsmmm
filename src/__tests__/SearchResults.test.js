import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../conponents/SearchResults";

describe("Search Results returns image", () => {
  const { asFragment } = render(<SearchResults />);

  it("renders image", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});