import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

class InputDispo extends PureComponent {
  render() {
    return (
      <Select
        mode="multiple"
        placeholder="Veuillez choisir une/plusieurs disponibilité(s)"
        allowClear={true}
        style={{ width: '100%' }}
        onChange={this.props.onChange}
      >
        <OptGroup label="Jours">
          <Option value="Lundi">Lundi</Option>
          <Option value="Mardi">Mardi</Option>
          <Option value="Mercredi">Mercredi</Option>
          <Option value="Jeudi">Jeudi</Option>
          <Option value="Vendredi">Vendredi</Option>
          <Option value="Samedi">Samedi</Option>
          <Option value="Dimanche">Dimanche</Option>
        </OptGroup>
        <OptGroup label="Moments">
          <Option value="Matin">Matin</Option>
          <Option value="Midi">Midi</Option>
          <Option value="Soir">Soir</Option>
        </OptGroup>
      </Select>
    )
  }
}

InputDispo.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputDispo;
