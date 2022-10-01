import React from "react"; 
import './App.css';
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
   <Weather city="London" />
        
      </header>
    </div>
  );
}

export default App;
