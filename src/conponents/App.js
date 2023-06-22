import React from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  return (
  <div className="app">
    <p>Hello World!</p>
    <img className="nasa-logo" alt="nasa-logo"
    src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"></img>
    <Search />
    </div>
  );
}

export default App;
