/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import styles from './about.scss';

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
        <div className={styles.mainDiv}>
          <img className={styles.dimensionedImage} src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/31961679_10216367479321908_2599004291289055232_n.jpg?_nc_cat=0&oh=a424df6353747939b734b5ef02ff3a63&oe=5B909A60" height="300" width="500" alt='Fondatrices'/>
          <div>"Fondatrices"<br/>De carvalho pinto Ana & Decooman Laurane</div>
        </div>
      </div>
    );
  }
}

export default About;
