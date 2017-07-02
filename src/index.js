import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/app" component={App}/>
    </div>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
