import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import styles from './NavBar.scss';

const { Sider } = Layout;

export class NavBar extends PureComponent {
  render() {
    const { location } = this.props;
    console.log(location);
    let key = location;
    if (key === 'search') {
      key = 'home';
    }
    if(key === 'infirmiers') {
      key = 'home';
    }
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{minHeight: '100vh'}}
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" selectedKeys={[key]}>
          <Menu.Item key="home">
             <Link to="/">
              <Icon type="home" />
              <span>Accueil</span>
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
