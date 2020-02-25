import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';


export default (
  
    <Switch>
        <Route component={Home} exact path='/' />
    </Switch>
   

)