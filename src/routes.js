import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Selection from './components/Selection/Selection';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces} from './components/Selection/Selection'


export default (
      <Provider store={store}>
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Selection} exact path='/selection'/>
        <Route component={Aries} path='/selection/Aries'/>
        <Route component={Taurus} path='/selection/Taurus'/>
        <Route component={Gemini} path='/selection/Gemini'/>
        <Route component={Cancer} path='/selection/Cancer'/>
        <Route component={Leo} path='/selection/Leo'/>
        <Route component={Virgo} path='/selection/Virgo'/>
        <Route component={Libra} path='/selection/Libra'/>
        <Route component={Scorpio} path='/selection/Scorpio'/>
        <Route component={Sagittarius} path='/selection/Sagittarius'/>
        <Route component={Capricorn} path='/selection/Capricorn'/>
        <Route component={Aquarius} path='/selection/Aquarius'/>
        <Route component={Pisces} path='/selection/Pisces'/>
    </Switch>

    </Provider>
   

)