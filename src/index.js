import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import SignIn from './components/sign-in/Sign-in';
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
      <Route path="/signin" component={SignIn}/>
      <Route path="/app" component={App}/>
    </div>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
