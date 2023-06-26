import React from "react";
import { render } from "@testing-library/react";
import App from "../conponents/App";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});