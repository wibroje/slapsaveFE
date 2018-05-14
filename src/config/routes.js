import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MachinesContainer from '../containers/MachinesContainer';
import ContactContainer from '../containers/ContactContainer';



export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/machines' component={ MachinesContainer }/>
    <Route path='/contact' component={ ContactContainer }/>
  </Switch>
)