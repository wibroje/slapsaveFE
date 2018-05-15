import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MachinesContainer from '../containers/MachinesContainer';
import EventsContainer from '../containers/EventsContainer';
import EventBody from '../components/EventBody';
import PostEvent from '../components/PostEvent';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/machines' component={ MachinesContainer }/>
    <Route path='/events' component={ EventsContainer }/>
    <Route path='/event/add' component={ PostEvent }/>
    <Route path='/event/:event_id' component={ EventBody }/>
  </Switch>
)