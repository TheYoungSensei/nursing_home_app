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
        <p>Infi-proxi est l'idée de deux jeunes étudiantes terminant leurs études en
          soins infirmiers qui décidèrent de lancer un projet innovant, facile d'utilisation
          et accessible à toute personne nécessitant un infirmier à domicile</p>
        <hr />
        <h5>L'équipe</h5>
      </div>
    );
  }
}

export default About;
