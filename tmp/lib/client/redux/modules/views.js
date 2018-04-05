var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import moment from 'moment';

var dateFormat = 'DD/MM/YYYY HH:mm';

var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';

var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

export default function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case ENTER_HOME_VIEW:
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    case LEAVE_HOME_VIEW:
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    default:
      return state;
  }
}

export function enterHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment().format(dateFormat);

  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

export function leaveHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment().format(dateFormat);

  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}