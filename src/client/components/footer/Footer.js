import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';


const FooterA = Layout.Footer;

export class Footer extends PureComponent {
  render() {
    return (
      <FooterA style={{ textAlign: 'center', paddingTop:'0px' }}>
        <div>
        <Link to='/contact'>
          <Icon type="message" />
          <span> Contact</span>
        </Link>
        </div>
        <div>
        <Link to='/information'>
          <Icon type="info-circle-o" />
          <span> Informations</span>
        </Link>
        </div>
        <div>
        <Link to='/about'>
          <Icon type="team" />
          <span> À propos de nous</span>
        </Link>
        </div>
        Infi-Proxi <Icon type="copyright" /> 2018 All copyrights reserved.
      </FooterA>
    );
  }
}
