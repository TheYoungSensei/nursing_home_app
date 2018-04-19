import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputAdress extends PureComponent {
  render() {
    const { adresses } = this.props;
    return (
      <Select
        placeholder="Veuilliez choisir une adresse"
        allowClear={true}
        style={{ width: '95%' }}
      >
        {
          adresses.map((adr) => {
            return <Option value={adr}>{adr}</Option>
          })
        }
      </Select>
    );
  }
}

InputAdress.propTypes = {
  adresses: PropTypes.array.isRequired
};

export default InputAdress;
