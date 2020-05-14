import React from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
