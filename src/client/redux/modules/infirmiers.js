/* eslint-disable no-undefined */
import { notification } from 'antd';
import history from '../../routes/memoryHistory';
import {appConfig} from '../../config';

const GET_INFIRMIERS = '@infirmiers/GET_INFIRMIERS';
const GET_INFIRMIERS_SUCCESS = '@infirmiers/GET_INFIRMIERS_SUCCESS';
const GET_INFIRMIERS_ERROR = '@infirmiers/GET_INFIRMIERS_ERROR';

const PERFORM_SEARCH = '@infirmiers/PERFORM_SEARCH';
const PERFORM_SEARCH_SUCCESS = '@infirmiers/PERFORM_SEARCH_SUCCESS';
const PERFORM_SEARCH_ERROR = '@infirmiers/PERFORM_SEARCH_ERROR';

const CANCEL_SEARCH = '@infirmiers/CANCEL_SEARCH';

const initialState = {
  infirmiers: [],
  infirmiersToDisplay: [],
  tags: [],
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
      infirmiersToDisplay: action.payload.infirmiers,
      tags: action.payload.tags
    };
  }
  case PERFORM_SEARCH_ERROR: {
    return {
      ...state,
      calculating: false,
      error: true
    };
  }
  case CANCEL_SEARCH: {
    return {
      ...state,
      infirmiersToDisplay: state.infirmiers,
      tags: initialState.tags
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
    const tags = new Set();
    const dispoSet = new Set(dispo);
    const infirmiers = getState().infirmiers.infirmiers;
    // create mapping
    const zonesMap = new Map();
    new Set([].concat(...infirmiers.map((inf)=> inf.zone))).forEach((zone) => {
      zonesMap.set(zone.postCode, zone.adress); // For each postCode associate adress.
    });
    const filteredInfirmiers = infirmiers.filter((inf) => {
      let displayIntoInfirmiers = true;
      // Process Zones.
      if(zones !== '') {
        // Create mapping.
        const zonesInf = new Set([].concat(...inf.zone.map((zone) => zone.postCode)));
        if(!zonesInf.has(zones)) {
          displayIntoInfirmiers = false;
        }
        tags.add(zonesMap.get(zones));
      }
      // Process Sexe.
      if(sexe !== undefined) {
        if(inf.sexe !== sexe) {
          displayIntoInfirmiers = false;
        }
        if(sexe === appConfig.sexe.male) {
          tags.add('Homme');
        } else {
          tags.add('Femme');
        }
      }
      if(lan.length !== 0) {
        let hasLan = false;
        const lanInf = new Set(inf.languages);
        lan.forEach((language) => {
          if(lanInf.has(language)) {
            hasLan = true;
          }
          tags.add(lan);
        });
        if(!hasLan) {
          displayIntoInfirmiers = false;
        }
      }
      if(dispo.length !== 0) {
        dispo.forEach((dis) => {
          tags.add(dis);
        });
        let dispoInf = false;
        const infDay = new Set(inf.availability.dayTimes);
        const infWeek = new Set(inf.availability.weekTimes);
        if(dispoSet.has('Matin') && infDay.has('Matin')) {
          dispoInf = true;
        }
        if(dispoSet.has('Midi') && infDay.has('Midi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Soir') && infDay.has('Soir')) {
          dispoInf = true;
        }
        if(dispoSet.has('Lundi') && infWeek.has('Lundi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Mardi') && infWeek.has('Mardi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Mercredi') && infWeek.has('Mercredi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Jeudi') && infWeek.has('Jeudi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Vendredi') && infWeek.has('Vendredi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Samedi') && infWeek.has('Samedi')) {
          dispoInf = true;
        }
        if(dispoSet.has('Dimanche') && infWeek.has('Dimanche')) {
          dispoInf = true;
        }
        displayIntoInfirmiers = dispoInf;
      }
      if(spe.length !== 0) {
        let hasSpe = false;
        const speInf = new Set().add(inf.specificity);
        spe.forEach((spec) => {
          if(speInf.has(spec)) {
            hasSpe = true;
          }
          tags.add(spec);
        });
        if(!hasSpe) {
          displayIntoInfirmiers = false;
        }
      }
      return displayIntoInfirmiers;
    });
    notification.success({
      message: 'Recherche réussie',
      duration: 1.3
    });
    history.push('infirmiers');
    dispatch({
      type: PERFORM_SEARCH_SUCCESS,
      payload: {
        infirmiers: filteredInfirmiers,
        tags: Array.from(tags)
      }
    });
  };
}

export function cancelSearch() {
  return dispatch => {
    dispatch({
      type: CANCEL_SEARCH
    });
  };
}
