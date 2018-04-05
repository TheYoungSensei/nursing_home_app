import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const FooterA = Layout.Footer;

export class Footer extends PureComponent {
  render() {
    return (
      <FooterA style={{ textAlign: 'center' }}>
        InfiProxi ©2018 All copyrights reserved.
      </FooterA>
    );
  }
}
