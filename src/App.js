import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import Home from './components/Home';

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
