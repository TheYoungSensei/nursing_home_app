import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputPostCode extends PureComponent {
  render() {
    const { zones, selectedKey } = this.props;
    return (
      <Select
        mode="multiple"
        placeholder="Veuilliez choisir un code postal"
        allowClear={true}
        style={{ width: '95%' }}
        value={selectedKey}
        onChange={this.props.onChange}
      >
        {
          zones.map((zone) => {
          return <Option key={zone.postCode} value={zone.postCode}>{zone.postCode}</Option>;
        })
        }
      </Select>
    );
  }
}

InputPostCode.propTypes = {
  zones: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputPostCode;
