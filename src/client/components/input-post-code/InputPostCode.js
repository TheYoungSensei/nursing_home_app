import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputPostCode extends PureComponent {
  render() {
    const { zones, selectedKey } = this.props;
    return (
      <Select
        placeholder="Veuilliez choisir un code postal"
        allowClear={true}
        style={{ width: '95%' }}
        value={selectedKey}
        onSelect={this.props.onSelect}
      >
        {
          zones.map((zone) => {
          return <Option value={zone.postCode}>{zone.postCode}</Option>
        })
        }
      </Select>
    );
  }
}

InputPostCode.propTypes = {
  zones: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default InputPostCode;
