import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import views from './views';
import infirmiers from './allInfirmiers';

export const reducers = {
  views,
  infirmiers
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
