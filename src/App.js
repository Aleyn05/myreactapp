import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import LogIn from './components/pages/LogIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/services' component={Services} />
          <Route path='/log-in' component={LogIn} /> 
        </Switch>
      </Router>
    </>
      
  );
}

export default App;
