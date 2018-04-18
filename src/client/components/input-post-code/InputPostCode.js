import React, { PureComponent } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

export class InputPostCode extends PureComponent {
  render() {
    return (
      <Select
        placeholder="Veuilliez choisir un code postal"
        allowClear={true}
        style={{ width: '95%' }}
      >
        <Option value="ixelles">1050</Option>
        <Option value="woluwe">1200</Option>
        <Option value="anderlecht">1070</Option>
      </Select>
    );
  }
}
