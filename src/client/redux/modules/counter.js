// ------------------------------
// CONSTANTS
// ------------------------------
const INCREMENT = '@counter/INCREMENT';
const DECREMENT = '@counter/DECREMENT';
const DOUBLE_ASYNC = '@counter/DOUBLE_ASYNC';
const DOUBLE_ASYNC_SUCCESS = '@counter/DOUBLE_ASYNC_SUCCESS';
const DOUBLE_ASYNC_ERROR = '@counter/DOUBLE_ASYNC_ERROR';

// ------------------------------
// REDUCER
// ------------------------------
const initialState = {
  value: 0,
  loading: false
};

export default function (
  state = initialState,
  action
) {
  switch(action.type) {
  case INCREMENT:
    return {
      ...state,
      value: state.value+1
    };
  case DECREMENT:
    return {
      ...state,
      value: state.value-1
    };
  case DOUBLE_ASYNC:
    return {
      ...state,
      loading: true
    };
  case DOUBLE_ASYNC_SUCCESS:
    return {
      ...state,
      value: action.payload,
      loading: false
    };
  default:
    return state;
  }
}

// ------------------------------
// ACTIONS CREATORS
// ------------------------------
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
  return (dispatch, getState) => {
    dispatch({
      type: DOUBLE_ASYNC
    });
    const state = getState();
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: DOUBLE_ASYNC_SUCCESS,
          payload: state.counter.value*2
        });
        resolve();
      }, 500);
    });
  };
}
