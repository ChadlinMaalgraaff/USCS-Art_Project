import React from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />
        <Home />
        <Footer />*/}
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
