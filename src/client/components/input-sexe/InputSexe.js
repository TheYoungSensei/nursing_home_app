import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import {appConfig} from '../../config';

class InputSexe extends PureComponent {
  render() {
    return(
      <Select
        placeholder="Veuilliez choisir un genre"
        allowClear={true}
        style={{ width: '95%' }}
        onChange={this.props.onChange}
      >
        <Select.Option value={appConfig.sexe.male}>Homme</Select.Option>
        <Select.Option value={appConfig.sexe.female}>Femme</Select.Option>
      </Select>
    );
  }
}

InputSexe.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputSexe;
