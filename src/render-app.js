import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App/App';
import LandingPage from './components/landing-page/landing-page';
import { Route } from 'react-router-dom';

injectTapEventPlugin();

export const renderApp = (store, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/landing" component={LandingPage}/>
          <Route path="/app" component={App}/>
        </div>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
};
