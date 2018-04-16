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

    counter: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,

    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    double: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {enterHome} = this.props;
    enterHome();
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
