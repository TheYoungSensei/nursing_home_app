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
        <p>
          Simple et efficace, infi-proxi vous propose, grâce à son moteur de recherche
          de trouver rapidemment un infirmier à domicile en Belgique correspondant à vos critères.
        </p>
        <p>
          Infi-proxi met à disposition des informations concernant les infirmiers à domicile de Belgique.
          Ce site est accessible par toutes personnes recherchant des soins infirmiers proche et de qualité.
        </p>
        <p>
          Infi-proxi permet le libre choix du practicien infirmier, assure sa proximité et ses qualifications par rapport
          aux soins prescrit.
        </p>
      </div>
    );
  }
}

export default Information;
