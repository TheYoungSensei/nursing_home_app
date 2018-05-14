/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './home.scss';

import { notification, Row, Col } from 'antd';

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
      <Row>
        <Col sm={24} md={11} className={styles.HomeButton} >
          <PatientButton >Patient</PatientButton>
        </Col>
        <Col sm={0} md={2}/>
        <Col sm={24} md={11} className={styles.HomeButton}>
          <NurseButton  click={this.clickNurseButton}>Infirmier</NurseButton>
        </Col>
      </Row>
    );
  }
}

export default Home;
