import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';

import styles from './Header.scss';

const HeaderA  = Layout.Header;

export class Header extends PureComponent {
  render() {
    return(
      <HeaderA style={{ background: '#fff', padding: 0 }}>
        <Icon
          className={styles.trigger}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold' }
          onClick={this.props.toggle}
        />
      </HeaderA>
    );
  }
}

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
