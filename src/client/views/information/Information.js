/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Information extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterInformation: PropTypes.func.isRequired,
    leaveInformation: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {enterInformation } = this.props;
    enterInformation();
  }

  componentWillUnmount() {
    const {leaveInformation} = this.props;
    leaveInformation();
  }

  render() {
    return (
      <div>
        <h3>Informations</h3>
        <p>Informations à propos de l'application.</p>
      </div>
    );
  }
}

export default Information;
