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
    name:                 PropTypes.string.isRequired,
    email:                PropTypes.string.isRequired
  };

  render(){
    const {
      email,
      name
    } = this.props;

    return(
      <div style={{width:'100%'}}>
        <div className={styles.infirmierViewer}>
          <Row>
            <Col>
              <ul className={styles["tab-group"]}>
                <li ><a style={{textAlign:"right"}}>{name}</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={styles.sender}>Email : {email}</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default InfirmierViewer
