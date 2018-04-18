//@flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Col, Row} from "antd";
import styles from './infirmierViewer.scss';

class InfirmierViewer extends PureComponent{

  // eslint-disable-next-line no-undef
  static propTypes = {
    infirmier:                 PropTypes.object.isRequired,
  };

  render(){
    const {
      infirmier
    } = this.props;

    return(
      <div style={{width:'100%'}}>
        <div className={styles.infirmierViewer}>
          <Row>
            <Col>
              <ul className={styles["tab-group"]}>
                <li ><a style={{textAlign:"right"}}>{infirmier.lastName} {infirmier.firstName}</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={styles.sender}>Email : {infirmier.email}</p>
              <p className={styles.sender}>Email : {infirmier.sexe}</p>
              <p className={styles.sender}>Email : {infirmier.specificity}</p>
              <p className={styles.sender}>Email : {infirmier.zone.join(', ')}</p>
              <p className={styles.sender}>Email : {infirmier.phone}</p>
              <p className={styles.sender}>Email : {infirmier.availability.dayTimes.join(', ')}</p>
              <p className={styles.sender}>Email : {infirmier.availability.weekTimes.join(', ')}</p>
              <p className={styles.sender}>Email : {infirmier.languages.join(', ')}</p>
              <p className={styles.sender}>Email : {infirmier.SPECIAL_STRANGE_NURSE_THING}</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default InfirmierViewer
