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
          soins infirmiers ayant décidé de lancer un projet innovant, facile d'utilisation
          et accessible à toute personne nécessitant un infirmier à domicile.</p>
        <hr />
        <h5>L'équipe</h5>
        <div><img src="https://imgur.com/K6EG19R.png" height="142" width="142" alt='Ana Pinto'/> Ana Pinto - Fondatrice du site</div>
        <div><img src="https://imgur.com/K6EG19R.png" height="142" width="142" alt='Laurane Decooman'/> Laurane Decooman - Fondatrice du site</div>
        <div><img src="https://imgur.com/K6EG19R.png" height="142" width="142" alt="E'"/> E' - Dev</div>
        <div><img src="https://imgur.com/K6EG19R.png" height="142" width="142" alt="C'"/> C' - Dev</div>
      </div>
    );
  }
}

export default About;
