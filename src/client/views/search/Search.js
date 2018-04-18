/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button, notification } from 'antd';

import InputSexe from '../../components/input-sexe/InputSexe';
import InputDispo from '../../components/input-dispo/InputDispo';
import InputLanguage from '../../components/input-language/InputLanguage';
import InputSpe from '../../components/input-spe/InputSpe';
import InputAdress from '../../components/input-adress/InputAdress';
import InputPostCode from '../../components/input-post-code/InputPostCode';

import styles from './search.scss';

class Search extends PureComponent {
  componentDidMount() {
    const {enterSearch} = this.props;
    enterSearch();
  }

  componentWillUnmount() {
    const {leaveSearch} = this.props;
    leaveSearch();
  }

  search = () => {
    notification.error({
      message: 'Action invalide',
      description: 'Opération en cours d\'implémentation'
    });
  };

  uniq_fast = (a) => {
    const seen = {};
    const out = [];
    const len = a.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
      const item = a[i];
      if(seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  };

  render() {
    const { infirmiers } = this.props;
    const languages = this.uniq_fast([].concat(...infirmiers.map((inf) => inf.languages)));
    const specialisations = this.uniq_fast(infirmiers.map((inf) => inf.specificity));
    const adresses = this.uniq_fast([].concat(...infirmiers.map((inf)=> inf.zone)));
    const postCodes = this.uniq_fast([].concat(...infirmiers.map((inf) => inf.postCodes)));
    return(
      <div>
        <h3>Formulaire de recherche</h3>
        <h6> Ce formulaire vous permet de trouver plus facilement
          un infirmier à domicile adapté à vos besoins.</h6>
        <br />
        <h5>Informations Diverses</h5>
        <Row>
          <Col span={12}><InputSexe /></Col>
          <Col
            span={12}
            className={styles['align-right']}
          ><InputLanguage  languages={languages}/></Col>
        </Row>
        <br/>
        <Row>
          <Col span={12}><InputDispo /></Col>
          <Col
            span={12}
            className={styles['align-right']}
          ><InputSpe  specialisations={specialisations}/></Col>
        </Row>
        <br />
        <h5>Zone d'action</h5>
        <Row>
          <Col span={12}><InputAdress  adresses={adresses}/></Col>
          <Col
            span={12}
            className={styles['align-right']}
          ><InputPostCode  postCodes={postCodes}/></Col>
        </Row>
        <br />
        <Button
          type="primary"
          onClick={this.search}
          className={styles['right']}
        >
          Rechercher
        </Button>
      </div>
    );
  }
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  currentView: PropTypes.string.isRequired,
  enterSearch: PropTypes.func.isRequired,
  leaveSearch: PropTypes.func.isRequired
};

export default Search;
