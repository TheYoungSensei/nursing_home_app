import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import views from './views';
import counter from './counter';

export const reducers = {
  views,
  counter
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
