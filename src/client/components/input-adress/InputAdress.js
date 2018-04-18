import React, { PureComponent } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

export class InputAdress extends PureComponent {
  render() {
    return (
      <Select
        placeholder="Veuilliez choisir une adresse"
        allowClear={true}
        style={{ width: '95%' }}
      >
        <Option value="ixelles">Ixelles</Option>
        <Option value="woluwe">Woluwe</Option>
        <Option value="anderlecht">Anderlecht</Option>
      </Select>
    );
  }
}
