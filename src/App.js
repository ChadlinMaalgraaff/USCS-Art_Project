import React from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />
        <Home />
        <Footer />*/}
        <Register />
      </BrowserRouter>
    </div>
  );
}

export default App;
