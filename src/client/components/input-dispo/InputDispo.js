import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

class InputDispo extends PureComponent {
  render() {
    return (
      <Select
        mode="tags"
        placeholder="Veuilliez choisir une disponibilité"
        allowClear={true}
        style={{ width: '95%' }}
        onChange={this.props.onChange}
      >
        <OptGroup label="Moment de la journée">
          <Option value="morning">Matin</Option>
          <Option value="midday">Midi</Option>
          <Option value="evening">Soir</Option>
        </OptGroup>
        <OptGroup label="Moment de la semaine">
          <Option value="monday">Lundi</Option>
          <Option value="tuesday">Mardi</Option>
          <Option value="wednesday">Mercredi</Option>
          <Option value="thursday">Jeudi</Option>
          <Option value="friday">Vendredi</Option>
          <Option value="saturday">Samedi</Option>
          <Option value="sunday">Dimanche</Option>
        </OptGroup>
      </Select>
    )
  }
}

InputDispo.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputDispo;
