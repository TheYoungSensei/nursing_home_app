import moment from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////

const ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';

const ENTER_SEARCH_VIEW = 'ENTER_SEARCH_VIEW';
const LEAVE_SEARCH_VIEW = 'LEAVE_SEARCH_VIEW';

const ENTER_INFIRMIER_VIEW = 'ENTER_INFIRMIER_VIEW';
const LEAVE_INFIRMIER_VIEW = 'LEAVE_INFIRMIER_VIEW';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENTER_SEARCH_VIEW:
    case ENTER_INFIRMIER_VIEW:
    case ENTER_HOME_VIEW:
      // on peux pas entrer sur une page où l on est déjà
      if (state.currentView !== action.currentView) {
        return {
          ...state,
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        };
      }
      return state;
    case LEAVE_SEARCH_VIEW:
    case LEAVE_INFIRMIER_VIEW:
    case LEAVE_HOME_VIEW:
      // on peux pas quitter une page où l on est pas déjà
      if (state.currentView === action.currentView) {
        return {
          ...state,
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        };
      }
      return state;
    default:
      return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome(time = moment().format(dateFormat)) {
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}

export function enterSearch(time = moment().format(dateFormat)) {
  return {
    type: ENTER_SEARCH_VIEW,
    currentView: 'search',
    enterTime: time,
    leaveTime: null
  };
}

export function leaveSearch(time = moment().format(dateFormat)) {
  return {
    type: LEAVE_SEARCH_VIEW,
    currentView: 'search',
    enterTime: null,
    leaveTime: time
  };
}

export function enterInfirmiers(time = moment().format(dateFormat)) {
  return {
    type: ENTER_INFIRMIER_VIEW,
    currentView: 'infirmiers',
    enterTime: time,
    leaveTime: null
  };
}

export function leaveInfirmiers(time = moment().format(dateFormat)) {
  return {
    type: LEAVE_INFIRMIER_VIEW,
    currentView: 'infirmiers',
    enterTime: null,
    leaveTime: time
  };
}
