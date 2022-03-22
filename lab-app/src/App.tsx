import React from 'react';
import './App.css';
import Horoscope from "./Horoscopes";

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <h1> Horoscope </h1>
          <Horoscope/>
        </header>
      </div>
  );
}

export default App;
