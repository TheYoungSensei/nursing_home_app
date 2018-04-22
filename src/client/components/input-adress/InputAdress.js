import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputAdress extends PureComponent {
  render() {
    const { zones, selectedKey } = this.props;
    return (
      <Select
        placeholder="Veuilliez choisir une adresse"
        allowClear={true}
        style={{ width: '95%' }}
        value={selectedKey}
        onSelect={this.props.onSelect}
      >
        {
          zones.map((zone) => {
            return <Option value={zone.postCode}>{zone.adress}</Option>
          })
        }
      </Select>
    );
  }
}

InputAdress.propTypes = {
  zones: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default InputAdress;
