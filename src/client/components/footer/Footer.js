import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import {Link} from 'react-router-dom';


const FooterA = Layout.Footer;

export class Footer extends PureComponent {
  render() {
    return (
      <FooterA style={{ textAlign: 'center', paddingTop:'0px' }}>
        <Row>
          <Col span={8}>
            <Link to="/about">
              <Icon style={{ fontSize: 'xx-large' }} type="team" /><br />
              <span>À propos</span>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/contact">
              <Icon style={{ fontSize: 'xx-large' }} type="message" /><br />
              Contact
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/information">
              <Icon style={{ fontSize: 'xx-large' }} type="info-circle-o" /><br />
              <span>Informations</span>
            </Link>
          </Col>
        </Row>
        <br/>Infi-Proxi <Icon type="copyright" /> 2018 All copyrights reserved.
      </FooterA>
    );
  }
}
