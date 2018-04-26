import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import {appConfig} from '../../config';

const Option = { Select };

class InputSexe extends PureComponent {
  render() {
    return(
      <Select
        placeholder="Veuilliez choisir un genre"
        allowClear={true}
        style={{ width: '95%' }}
        onChange={this.props.onChange}
      >
        <Option value={appConfig.sexe.male}>Homme</Option>
        <Option value={appConfig.sexe.female}>Femme</Option>
      </Select>
    );
  }
}

InputSexe.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputSexe;
