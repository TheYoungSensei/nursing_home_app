import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import styles from './NavBar.scss';

const { Sider } = Layout;

export class NavBar extends PureComponent {
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{minHeight: '100vh'}}
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="home" />
            <span>Accueil</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="search" />
            <span>Recherche</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

NavBar.propTypes = {
  collapsed: PropTypes.bool.isRequired
};
