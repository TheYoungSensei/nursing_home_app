/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { Select, Button, Icon } from 'antd';

import InfirmierTable from '../../components/infirmierTable/InfirmierTable';

class Infirmiers extends PureComponent {

  componentDidMount() {
    const { enterInfirmiers } = this.props;
    enterInfirmiers();
  }

  componentWillUnmount() {
    const {leaveInfirmiers} = this.props;
    leaveInfirmiers();
  }

  render() {
    const { infirmiers, tags } = this.props;
    const languages = Array.from(new Set(([].concat(...infirmiers.map((inf) => inf.languages))))).map((lan) => {
      return { text: lan, value: lan };
    });
    return(
      <div>
        <h3>Infirmiers</h3>
        <p> Vos critères : <Select
          mode="multiple"
          style={{width: '100%'}}
          disabled={true}
          value={tags}
        />
        </p>
        <InfirmierTable infirmiers={infirmiers} languages={languages}/>
      </div>
    );
  }
}

Infirmiers.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  currentView: PropTypes.string.isRequired,
  enterInfirmiers: PropTypes.func.isRequired,
  leaveInfirmiers: PropTypes.func.isRequired,

  infirmiers: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired
};

export default Infirmiers;
