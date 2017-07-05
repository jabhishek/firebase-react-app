import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index';
import createHistory from 'history/createBrowserHistory';

import {renderApp} from './components/render-app';

import './index.css';

import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const reducer = combineReducers({...reducers,
  router: routerReducer });

const middleware = applyMiddleware(
  // logger,
  routerMiddleware(history)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(middleware));

renderApp(store, history);
