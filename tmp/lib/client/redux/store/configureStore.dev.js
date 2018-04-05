import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import thunkMiddleware from 'redux-thunk';
import reducer from '../modules/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


var loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

export var history = createHistory();

var enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history), loggerMiddleware));

export default function configureStore(initialState) {
  var store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }
  return store;
}