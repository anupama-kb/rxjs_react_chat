import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import  './index.css';
//import { FirstPerson, SecondPerson, PersonSwitcher } from './components';

import  FirstPerson from './components/FirstPerson';
import SecondPerson from './components/SecondPerson';
import PersonSwitcher  from './components/PersonSwitcher';


import './App.css';

const App = () => (
  <Router>
    <>
      <PersonSwitcher />
      <Switch>
        <Route path="/" component={FirstPerson} exact />>
        <Route path="/first-person" component={FirstPerson} exact />>
        <Route path="/second-person" component={SecondPerson} exact />>
      </Switch>
    </>
  </Router>
);

export default App;