import React, { PureComponent } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class InputLanguage extends PureComponent {
  render() {
    return(
      <Select
        placeholder="Veuilliez choisir une langue"
        allowClear={true}
        style={{ width: '95%' }}
      >
        <Option value="fr">Français</Option>
        <Option value="nl">Néerlandais</Option>
        <Option value="de">Allemand</Option>
        <Option value="en">Anglais</Option>
      </Select>
    );
  }
}

export default InputLanguage;
