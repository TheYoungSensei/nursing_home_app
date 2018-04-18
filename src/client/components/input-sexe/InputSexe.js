import React, { PureComponent } from 'react';
import { Select } from 'antd';

const Option = { Select };

class InputSexe extends PureComponent {
  render() {
    return(
      <Select
        placeholder="Veuilliez choisir un genre"
        allowClear={true}
        style={{ width: '95%' }}
      >
        <Option value="mr">Homme</Option>
        <Option value="mme">Femme</Option>
      </Select>
    );
  }
}

export default InputSexe;
