import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../conponents/App.js";

describe("App component", () => {
  test("renders 'Hello World!' text", () => {
    render(<App />);
    const helloWorldText = screen.getByText(/Hello World!/i);
    expect(helloWorldText).toBeInTheDocument();
  });

  test("renders NASA logo", () => {
    render(<App />);
    const nasaLogo = screen.getByAltText("nasa-logo");
    expect(nasaLogo).toBeInTheDocument();
    expect(nasaLogo).toHaveAttribute(
      "src",
      "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    );
  });

  test("renders Search component", () => {
    render(<App />);
    const searchComponent = screen.getByTestId("search-component");
    expect(searchComponent).toBeInTheDocument();
  });
});