import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
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
        <Menu theme="dark" mode="inline" selectedKeys={[this.props.location]}>
          <Menu.Item key="home">
             <Link to="/">
              <Icon type="home" />
              <span>Accueil</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="search">
            <Link to="/search">
              <Icon type="search" />
              <span>Recherche</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact">
              <Icon type="message" />
              <span>Contact</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="information">
            <Link to="/information">
              <Icon type="info-circle-o" />
              <span>Informations</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">
              <Icon type="team" />
              <span>Á propos</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

NavBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired
};
