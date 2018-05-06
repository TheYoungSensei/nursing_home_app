/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './home.scss';

import { notification } from 'antd';

import PatientButton from '../../components/patientButton/PatientButton';
import NurseButton from '../../components/nurseButton/NurseButton';

class Home extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterHome: PropTypes.func.isRequired,
    leaveHome: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const {leaveHome} = this.props;
    leaveHome();
  }

  clickNurseButton = () => {
    notification.error({
      message: 'Opération non autorisée'
    });
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center'}}>
          <div className={styles.HomeButton} >
            <PatientButton >Patient</PatientButton>
          </div>
          <div className={styles.HomeButton} style={{ marginLeft: '200px' }}>
            <NurseButton  click={this.clickNurseButton}>Infirmier</NurseButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
