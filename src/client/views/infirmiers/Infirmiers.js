/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';

import InfirmierTable from '../../components/infirmierTable/InfirmierTable';

import styles from './infirmiers.scss';

class Infirmiers extends PureComponent {

  componentDidMount() {
    const { enterInfirmiers } = this.props;
    enterInfirmiers();
  }

  componentWillUnmount() {
    const {leaveInfirmiers} = this.props;
    leaveInfirmiers();
  }

  render() {
    const { infirmiers } = this.props;
    const languages = Array.from(new Set(([].concat(...infirmiers.map((inf) => inf.languages))))).map((lan) => { return { text: lan, value: lan }});
    console.log(languages);
    return(
      <div>
        <h3>Infirmiers</h3>
        <InfirmierTable infirmiers={infirmiers} languages={languages}/>
      </div>
    );
  }
}

Infirmiers.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  currentView: PropTypes.string.isRequired,
  enterInfirmiers: PropTypes.func.isRequired,
  leaveInfirmiers: PropTypes.func.isRequired,

  infirmiers: PropTypes.array.isRequired
};

export default Infirmiers;
