/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './home.scss';

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

  render() {
    return (
      <div>
        <h3>Accueil</h3>
        <h4>Bienvenue sur votre application. Êtes-vous un patient ou un infirmier ?</h4>
        <div style={{ textAlign: 'center'}}>
          <div className={styles.HomeButton} >
            <PatientButton >Patient</PatientButton>
          </div>
          <div className={styles.HomeButton} style={{ marginLeft: '200px' }}>
            <NurseButton >Infirmier</NurseButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
