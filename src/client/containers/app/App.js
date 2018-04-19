
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Content } = Layout;
import MainRoutes from '../../routes/MainRoutes';
import {NavBar} from '../../components/navbar/NavBar';
import { Header } from '../../components/header/Header';
import {Footer} from '../../components/footer/Footer';

import './app.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  componentDidMount() {
    const { getInfirmiers } = this.props;
    getInfirmiers();
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div id="appContainer">
        <Layout>
          <NavBar  collapsed={collapsed} location={this.props.currentView}/>
          <Layout>
            <Header  collapsed={collapsed} toggle={this.toggle}/>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              <MainRoutes />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  currentView: PropTypes.string
};

export default App;
