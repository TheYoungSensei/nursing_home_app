import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class InputLanguage extends PureComponent {
  render() {
    const { languages } = this.props;
    return(
      <Select
        placeholder="Veuilliez choisir une langue"
        allowClear={true}
        style={{ width: '95%' }}
      >
        {
          languages.map((lan) => {
            return <Option value={lan}>{lan}</Option>
          })
        }
      </Select>
    );
  }
}

InputLanguage.propTypes = {
  languages: PropTypes.object.isRequired
};

export default InputLanguage;
