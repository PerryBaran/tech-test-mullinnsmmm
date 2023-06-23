import React from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  return (
  <div className="app">
    <img 
    className="nasa-logo" 
    alt="nasaLogo"
    src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    />
    <Search />
    </div>
  );
}

export default App;
