// @flow
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index';
import createHistory from 'history/createBrowserHistory';
import {renderApp} from './render-app';
import {auth} from './firebase';
import rootSaga from './sagas/index';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {loginSuccess, logout} from './actions/auth';
import type {User} from './actions/auth';

import './assets/styles/common/reset.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const reducer = combineReducers({
  ...reducers,
  router: routerReducer });

const middleware = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  reducer,
  composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

auth.onAuthStateChanged((user: ?User) => {
  if (user) {
    console.log('changed', user);
    store.dispatch(loginSuccess(user));
  } else {
    store.dispatch(logout());
  }
});

renderApp(store, history);
