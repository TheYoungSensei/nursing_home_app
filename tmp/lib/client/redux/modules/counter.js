var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INCREMENT = '@counter/INCREMENT';
var DECREMENT = '@counter/DECREMENT';
var DOUBLE_ASYNC = '@counter/DOUBLE_ASYNC';
var DOUBLE_ASYNC_SUCCESS = '@counter/DOUBLE_ASYNC_SUCCESS';
var DOUBLE_ASYNC_ERROR = '@counter/DOUBLE_ASYNC_ERROR';

var initialState = {
  value: 0,
  loading: false
};

export default function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case INCREMENT:
      return _extends({}, state, {
        value: state.value + 1
      });
    case DECREMENT:
      return _extends({}, state, {
        value: state.value - 1
      });
    case DOUBLE_ASYNC:
      return _extends({}, state, {
        loading: true
      });
    case DOUBLE_ASYNC_SUCCESS:
      return _extends({}, state, {
        value: action.payload,
        loading: false
      });
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function doubleAsync() {
  return function (dispatch, getState) {
    dispatch({
      type: DOUBLE_ASYNC
    });
    var state = getState();
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: DOUBLE_ASYNC_SUCCESS,
          payload: state.counter.value * 2
        });
        resolve();
      }, 500);
    });
  };
}