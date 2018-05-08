/* eslint-disable no-undef,no-plusplus,react/no-unescaped-entities,no-undefined */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button, notification } from 'antd';

import InputSexe from '../../components/input-sexe/InputSexe';
import InputDispo from '../../components/input-dispo/InputDispo';
import InputLanguage from '../../components/input-language/InputLanguage';
import InputSpe from '../../components/input-spe/InputSpe';
import InputAddress from '../../components/input-adress/InputAddress';
import InputPostCode from '../../components/input-post-code/InputPostCode';

import styles from './search.scss';

class Search extends PureComponent {
  state = {
    zones: undefined,
    sexe: undefined,
    lan: new Set(),
    dispo: [],
    spe: [],
    hasError: false
  };

  componentDidMount() {
    const {enterSearch} = this.props;
    enterSearch();
  }

  componentWillUnmount() {
    const {leaveSearch} = this.props;
    leaveSearch();
  }

  search = () => {
    const { performSearch } = this.props;
    console.log(this.state);
    if (!this.state.zones) {
      notification.error({
        message: 'Formulaire incomplet',
        description: 'Pouvez vous nous renseigner sur votre lieu de résidence ?'
      });
      this.setState({ hasError: true});
    } else {
      performSearch({
        zones: this.state.zones,
        sexe: this.state.sexe,
        lan: Array.from(this.state.lan),
        dispo: this.state.dispo,
        spe: this.state.spe
      });
    }
  };

  handleZone = (zones) => {
    this.setState({ zones, hasError: false });
  };

  handleSexe = (event) => {
    if(event.value) {
      this.setState({ sexe: event.type });
    } else {
      this.setState({ sexe: undefined })
    }
  };

  handleLanguage = (event) => {
    const tempLan = this.state.lan;
    if(event.value) {
      tempLan.add(event.lan);
    } else {
      tempLan.delete(event.lan);
    }
    this.setState({ lan: tempLan });
  };

  handleDispo = (dispo) => {
    this.setState({ dispo });
  };

  handleSpe = (spe) => {
    this.setState({ spe });
  };

  uniqFast = (a) => {
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
    const { infirmiers, searching, zones } = this.props;
    const specialisations = this.uniqFast(infirmiers.map((inf) => inf.specificity).filter(lan => lan !== ''));
    return(
      <div>
        <h3>Formulaire de recherche</h3>
        <h6> Ce formulaire vous permet de trouver plus facilement
          un infirmier à domicile adapté à vos besoins.</h6>
        <br />
        <h5>Où habitez-vous ?</h5>
        <Row>
          <Col span={12}><InputAddress zones={zones} onChange={this.handleZone} selectedKey={this.state.zones} hasError={this.state.hasError}/></Col>
          <Col
            span={12}
            className={styles['align-right']}
          ><InputPostCode hasError={this.state.hasError} zones={zones} onChange={this.handleZone} selectedKey={this.state.zones}/></Col>
        </Row>
        <h5>Pour quand cherchez-vous ?</h5>
        <Row>
          <Col><InputDispo onChange={this.handleDispo}/></Col>
        </Row>
        <br />
        <h5>Qui cherchez-vous ?</h5>
        <Row>
          <Col
            span={8}
            className={styles['align-right']}
          >
            <InputSexe
              onChange={this.handleSexe}
              selectedSexe={this.state.sexe}
            />
          </Col>
          <Col
            span={8}
          >
            <InputLanguage onChange={this.handleLanguage}/>
          </Col>
          <Col
            span={8}
            className={styles['align-center']}
          >
            <InputSpe specialisations={specialisations} onChange={this.handleSpe}/>
          </Col>
        </Row>
        <br />
        <Button
          type="primary"
          onClick={this.search}
          className={styles.right}
          loading={searching}
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
  leaveSearch: PropTypes.func.isRequired,

  infirmiers: PropTypes.array.isRequired,
  searching: PropTypes.bool.isRequired,
  performSearch: PropTypes.func.isRequired
};

export default Search;
