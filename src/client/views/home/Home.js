/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Home extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterHome: PropTypes.func.isRequired,
    leaveHome: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {enterHome, getInfirmiers } = this.props;
    enterHome();
    getInfirmiers();
  }

  componentWillUnmount() {
    const {leaveHome} = this.props;
    leaveHome();
  }

  render() {
    return (
      <p>Welcome to Infiproxi.</p>
    );
  }
}

export default Home;
