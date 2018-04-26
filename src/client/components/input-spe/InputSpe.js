import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class InputSpe extends PureComponent {
  render() {
    const { specialisations } = this.props;
    return (
      <Select
        placeholder="Veuillez choisir une spécialisation"
        allowClear={true}
        style={{ width: '95%' }}
        onChange={this.props.onChange}
        mode="multiple"
      >
        {
          specialisations.map((spe) => {
            return <Option value={spe}>{spe}</Option>
          })
        }
      </Select>
    )
  }
}

InputSpe.propTypes = {
  specialisations: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputSpe;
