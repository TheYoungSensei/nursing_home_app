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
  error: false,
  zones: [
    { adress: 'Schaerbeek', postCode: 1030 },
    { adress: 'Etterbeek', postCode: 1040 },
    { adress: 'Ixelles', postCode: 1050 },
    { adress: 'Saint-Gilles', postCode: 1060 },
    { adress: 'Anderlecht', postCode: 1070 },
    { adress: 'Molenbeek-St-Jean', postCode: 1080 },
    { adress: 'Koekelberg', postCode: 1081 },
    { adress: 'Berchem-Ste-Agathe', postCode: 1082 },
    { adress: 'Ganshoren', postCode: 1083 },
    { adress: 'Jette', postCode: 1090 },
    { adress: 'Evere', postCode: 1140 },
    { adress: 'Woluwé-St-Pierre', postCode: 1150 },
    { adress: 'Auderghem', postCode: 1160 },
    { adress: 'Watermael-Boitsfort', postCode: 1170 },
    { adress: 'Uccle', postCode: 1180 },
    { adress: 'Forest', postCode: 1190 },
    { adress: 'Woluwé-St-Lambert', postCode: 1200 },
    { adress: 'St Josse-ten-Noode', postCode: 1210 }
  ]
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

function processZone(inf, zones, tags, zonesMap) {
  tags.add(zonesMap.get(zones));
  const zonesInf = new Set([].concat(...inf.zone.map((zone) => zone.postCode)));
  return zonesInf.has(zones);
}

function processSexe(inf, sexe, tags) {
  if (sexe === appConfig.sexe.male) {
    tags.add('Homme');
  } else {
    tags.add('Femme');
  }
  return inf.sexe === sexe;
}

function processLan(inf, lan, tags) {
  let hasLan = false;
  const lanInf = new Set(inf.languages);
  lan.forEach((language) => {
    if (lanInf.has(language)) {
      hasLan = true;
    }
    tags.add(language);
  });
  return hasLan;
}

function processDispo(dispo, tags, inf, dispoSet) {
  dispo.forEach((dis) => {
    tags.add(dis);
  });
  let dispoInf = false;
  const infDay = new Set(inf.availability.dayTimes);
  const infWeek = new Set(inf.availability.weekTimes);
  if (dispoSet.has('Matin') && infDay.has('Matin')) {
    dispoInf = true;
  }
  if (dispoSet.has('Midi') && infDay.has('Midi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Soir') && infDay.has('Soir')) {
    dispoInf = true;
  }
  if (dispoSet.has('Lundi') && infWeek.has('Lundi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Mardi') && infWeek.has('Mardi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Mercredi') && infWeek.has('Mercredi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Jeudi') && infWeek.has('Jeudi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Vendredi') && infWeek.has('Vendredi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Samedi') && infWeek.has('Samedi')) {
    dispoInf = true;
  }
  if (dispoSet.has('Dimanche') && infWeek.has('Dimanche')) {
    dispoInf = true;
  }
  return dispoInf;
}

function processSpe(inf, spe, tags) {
  let hasSpe = false;
  const speInf = new Set().add(inf.specificity);
  spe.forEach((spec) => {
    if (speInf.has(spec)) {
      hasSpe = true;
    }
    tags.add(spec);
  });
  return hasSpe;
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
    getState().infirmiers.zones.forEach((zone) => {
      zonesMap.set(zone.postCode, zone.adress);
    });
    const filteredInfirmiers = infirmiers.filter((inf) => {
      let hasZones= true;
      let hasSexe = true;
      let hasLan = true;
      let hasDispo = true;
      let hasSpe = true;
      // Process Zones.
      if(zones !== '') {
        hasZones = processZone(inf, zones, tags, zonesMap);
      }
      // Process Sexe.
      if(sexe !== undefined) {
        hasSexe = processSexe(inf, sexe, tags);
      }
      if(lan.length !== 0) {
        hasLan = processLan(inf, lan, tags);
      }
      if(dispo.length !== 0) {
        hasDispo = processDispo(dispo, tags, inf, dispoSet);
      }
      if(spe.length !== 0) {
        hasSpe = processSpe(inf, spe, tags);
      }
      return hasZones && hasSexe && hasLan && hasDispo && hasSpe;
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
