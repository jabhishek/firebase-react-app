import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import SignIn from './sign-in/Sign-in';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export const renderApp = () => {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/app" component={App}/>
      </div>
    </Router>,
    document.getElementById('root'));
};
