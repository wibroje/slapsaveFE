import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import MachinesContainer from '../containers/MachinesContainer';



export default (
  <Switch>
    <Route exact path='/' component={ HomeContainer }/>
    <Route path='/machines' component={ MachinesContainer }/>
  </Switch>
)