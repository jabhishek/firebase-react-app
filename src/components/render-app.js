import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App/App';
import SignIn from './sign-in/Sign-in';
import {
  Route
} from 'react-router-dom';

export const renderApp = (store, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/app" component={App}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
};
