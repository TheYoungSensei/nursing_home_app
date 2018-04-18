/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';

import InfirmierTable from '../../components/infirmierTable/InfirmierTable';

import styles from './infirmiers.scss';

class Infirmiers extends PureComponent {

  componentDidMount() {
    const {enterInfirmiers} = this.props;
    enterInfirmiers();
  }

  componentWillUnmount() {
    const {leaveInfirmiers} = this.props;
    leaveInfirmiers();
  }

  infirmiers = () => {
    notification.error({
      message: 'Action invalide',
      description: 'Opération en cours d\'implémentation'
    });
  };

  render() {
    let infirmiers = []; // DOING TODO
    if (this.state) {
      infirmiers = this.state.infirmiers;
    }
    return(
      <div>
        <h3>DataTable Infirmiers</h3>
        <Button
          type="primary"
          onClick={this.infirmiers}
          className={styles['right']}
        >
          Afficher DataTable
        </Button>
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
  leaveInfirmiers: PropTypes.func.isRequired
};

export default Infirmiers;
