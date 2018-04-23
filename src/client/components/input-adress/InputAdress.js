import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputAdress extends PureComponent {
  render() {
    const { zones, selectedKey } = this.props;
    return (
      <Select
        mode="multiple"
        placeholder="Veuilliez choisir une adresse"
        allowClear={true}
        style={{ width: '95%' }}
        value={selectedKey}
        onChange={this.props.onChange}
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
  onChange: PropTypes.func.isRequired
};

export default InputAdress;
