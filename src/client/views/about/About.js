/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class About extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterAbout: PropTypes.func.isRequired,
    leaveAbout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const {leaveAbout} = this.props;
    leaveAbout();
  }

  render() {
    return (
      <div>
        <h3>À propos</h3>
        <p>À propos de nous. Text shall come here.</p>
      </div>
    );
  }
}

export default About;
