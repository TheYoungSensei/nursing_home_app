var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import views from './views';
import counter from './counter';

export var reducers = {
  views: views,
  counter: counter
};

export default combineReducers(_extends({}, reducers, {
  routing: routerReducer
}));