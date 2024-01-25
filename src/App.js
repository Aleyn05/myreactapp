import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import LogIn from './components/pages/LogIn';
import Appointment from './components/pages/Appoinment.js';

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
          <Route path='/Appointment' component={Appointment} /> 
        </Switch>
      </Router>
    </>
      
  );
}

export default App;
