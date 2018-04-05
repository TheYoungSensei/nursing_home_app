import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducer from '../modules/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export var history = createHistory();

var enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history)));

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}