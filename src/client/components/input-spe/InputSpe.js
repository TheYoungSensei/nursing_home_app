import React, { PureComponent } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class InputSpe extends PureComponent {
  render() {
    return (
      <Select
        placeholder="Veuillez choisir une spécialisation"
        allowClear={true}
        style={{ width: '95%' }}
      >
        <Option value="oncologie">Oncologie</Option>
        <Option value="geriatrie">Gériatrie</Option>
      </Select>
    )
  }
}

export default InputSpe;
