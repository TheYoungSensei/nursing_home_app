/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';

import InfirmierTable from '../../components/infirmierTable/InfirmierTable';

import styles from './infirmiers.scss';

class Infirmiers extends PureComponent {

  componentDidMount() {
    const {enterInfirmiers, getInfirmiers } = this.props;
    enterInfirmiers();
    getInfirmiers();
  }

  componentWillUnmount() {
    const {leaveInfirmiers} = this.props;
    leaveInfirmiers();
  }

  render() {
    let infirmiers = this.props.infirmiers.infirmiers;
    return(
      <div>
        <h3>Infirmiers</h3>

        <InfirmierTable infirmiers={infirmiers}/>
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

  getInfirmiers: PropTypes.func.isRequired,
  infirmiers: PropTypes.object.isRequired
};

export default Infirmiers;
