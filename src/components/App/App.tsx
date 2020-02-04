import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Home} from '../Home';
import {Dashboard} from '../Dashboard';

import './App.css';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  );
}
