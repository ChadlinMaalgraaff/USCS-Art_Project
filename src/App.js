import React from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Artist from './Components/ArtistProfile/ArtistProfile';
import Store from './Components/Store/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/artist" component={Artist} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
