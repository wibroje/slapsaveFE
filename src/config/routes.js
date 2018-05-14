import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MachinesContainer from '../containers/MachinesContainer';
import EventsContainer from '../containers/EventsContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/machines' component={ MachinesContainer }/>
    <Route path='/events' component={ EventsContainer }/>
  </Switch>
)