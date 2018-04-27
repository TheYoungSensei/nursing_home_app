const GET_INFIRMIERS = '@infirmiers/GET_INFIRMIERS';
const GET_INFIRMIERS_SUCCESS = '@infirmiers/GET_INFIRMIERS_SUCCESS';
const GET_INFIRMIERS_ERROR = '@infirmiers/GET_INFIRMIERS_ERROR';

const PERFORM_SEARCH = '@infirmiers/PERFORM_SEARCH';
const PERFORM_SEARCH_SUCCESS = '@infirmiers/PERFORM_SEARCH_SUCCESS';
const PERFORM_SEARCH_ERROR = '@infirmiers/PERFORM_SEARCH_ERROR';

const initialState = {
  infirmiers: [],
  infirmiersToDisplay: [],
  loading: false,
  calculating: false,
  calculated: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_INFIRMIERS: {
    return {
      ...state,
      loading: true
    };
  }
  case GET_INFIRMIERS_ERROR: {
    return {
      ...state,
      loading: false,
      error: true
    };
  }
  case GET_INFIRMIERS_SUCCESS: {
    return {
      ...state,
      loading: false,
      infirmiers: action.payload.data.tags,
      infirmiersToDisplay: action.payload.data.tags
    };
  }
  case PERFORM_SEARCH: {
    return {
      ...state,
      calculating: true
    };
  }
  case PERFORM_SEARCH_SUCCESS: {
    return {
      ...state,
      calculating: false,
      calculated: true,
      infirmiersToDisplay: action.payload
    };
  }
  case PERFORM_SEARCH_ERROR: {
    return {
      ...state,
      calculating: false,
      error: true
    };
  }
  default:
    return state;
  }
}

export function getInfirmiers() {
  return dispatch => {
    const FETCH_TYPE = 'FETCH';
    const url = window.location.origin + '/api/infirmier';
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
    });
  };
}

export function performSearch(searchDatas) {
  return (dispatch, getState) => {
    dispatch({
      type: PERFORM_SEARCH
    });
    const {
      zones,
      sexe,
      lan,
      dispo,
      spe
    } = searchDatas;
    const dispoSet = new Set(dispo);
    const infirmiers = getState().infirmiers.infirmiers;
    const filteredInfirmiers = infirmiers.filter((inf) => {
      let displayIntoInfirmiers = true;
      // Process Zones.
      if(zones.length !== 0) {
        let hasZone = false;
        // Create mapping.
        const zonesInf = new Set([].concat(...inf.zone.map((zone) => zone.postCode)));
        zones.forEach((zone) => {
          // If inf has only one successful zone keep it.
          if(zonesInf.has(zone)) {
            hasZone = true;
          }
        });
        // otherwie don't display it into the table.
        if(!hasZone) {
          displayIntoInfirmiers = false;
        }
      }
      // Process Sexe.
      if(sexe !== '') {
        if(inf.sexe !== sexe) {
          displayIntoInfirmiers = false;
        }
      }
      if(lan.length !== 0) {
        let hasLan = false;
        const lanInf = new Set(inf.languages);
        lan.forEach((language) => {
          if(lanInf.has(language)) {
            hasLan = true;
          }
        });
        if(!hasLan) {
          displayIntoInfirmiers = false;
        }
      }
      if(dispo.length !== 0) {
        const infDay = new Set(inf.availability.dayTimes);
        const infWeek = new Set(inf.availability.weekTimes);
        if(dispoSet.has('Matin') && !infDay.has('Matin')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Midi') && !infDay.has('Midi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Soir') && !infDay.has('Soir')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Lundi') && !infWeek.has('Lundi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Mardi') && !infWeek.has('Mardi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Mercredi') && !infWeek.has('Mercredi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Jeudi') && !infWeek.has('Jeudi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Vendredi') && !infWeek.has('Vendredi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Samedi') && !infWeek.has('Samedi')) {
          displayIntoInfirmiers = false;
        }
        if(dispoSet.has('Dimanche') && !infWeek.has('Dimanche')) {
          displayIntoInfirmiers = false;
        }
      }
      if(spe.length !== 0) {
        let hasSpe = false;
        const speInf = new Set().add(inf.specificity);
        spe.forEach((spec) => {
          if(speInf.has(spec)) {
            hasSpe = true;
          }
        });
        if(!hasSpe) {
          displayIntoInfirmiers = false;
        }
      }
      return displayIntoInfirmiers;
    });
    dispatch({
      type: PERFORM_SEARCH_SUCCESS,
      payload: filteredInfirmiers
    });
  };
}
