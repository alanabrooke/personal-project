import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Selection from './components/Selection/Selection';
import { Provider } from 'react-redux';
import store from './redux/store';


export default (
      <Provider store={store}>
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Selection} path='/selection'/>
    </Switch>

    </Provider>
   

)