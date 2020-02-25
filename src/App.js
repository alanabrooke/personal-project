import React from 'react';
import './App.css';
import {HashRouter, Switch} from 'react-router-dom';
import routes from './routes';



function App() {
  return (
    <HashRouter>
    <div className="App">
      <h1>Zodigames</h1>
      {routes}
      </div>
    </HashRouter>
  );
}


export default App;
