const GET_INFIRMIERS = '@infirmiers/GET_INFIRMIERS';
const GET_INFIRMIERS_SUCCESS = '@infirmiers/GET_INFIRMIERS_SUCCESS';
const GET_INFIRMIERS_ERROR = '@infirmiers/GET_INFIRMIERS_ERROR';

const initialState = {
  infirmiers: [],
  loading: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INFIRMIERS: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_INFIRMIERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case GET_INFIRMIERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        infirmiers: action.payload.data.tags
      }
    }
    default:
      return state;
  }
}

export function getInfirmiers() {
  return dispatch => {
    const FETCH_TYPE = 'FETCH';
    const url = 'http://localhost:8910/api/infirmier';
    const method = 'get';
    const headers = {};
    const options = {
      credentials: 'same-origin'
    };

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        type: FETCH_TYPE,
        actionTypes: {
          request: GET_INFIRMIERS,
          success: GET_INFIRMIERS_SUCCESS,
          fail: GET_INFIRMIERS_ERROR
        },
        url,
        method,
        headers,
        options
      }
    })
  }
}
