import React, { Component } from 'react';
import * as ROUTES from './constants/Routes'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ ROUTES.LANDING }>
          <Home />
        </Route>

      </Router>
    </React.Fragment>
  );
}

export default App;
