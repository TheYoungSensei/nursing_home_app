import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class InputPostCode extends PureComponent {
  render() {
    const { postCodes } = this.props;
    return (
      <Select
        placeholder="Veuilliez choisir un code postal"
        allowClear={true}
        style={{ width: '95%' }}
      >
        {
          postCodes.map((postCode) => {
          return <Option value={postCode}>{postCode}</Option>
        })
        }
      </Select>
    );
  }
}

InputPostCode.propTypes = {
  postCodes: PropTypes.array.isRequired
};

export default InputPostCode;
