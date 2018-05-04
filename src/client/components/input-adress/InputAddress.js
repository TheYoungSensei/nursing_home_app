import
  React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

const Option = Select.Option;

class InputAddress extends PureComponent {
  render() {
    const { zones, selectedKey, hasError } = this.props;
    const sortedZones = zones.sort((zone1, zone2) => zone1.adress.localeCompare(zone2.adress));
    return (
      <Form.Item
        validateStatus={hasError?'error':''}
      >
        <Select
          placeholder="Veuillez choisir une adresse"
          allowClear={true}
          style={{ width: '95%' }}
          value={selectedKey}
          onChange={this.props.onChange}
        >
          {
            sortedZones.map((zone) => {
              return <Option key={zone.postCode} value={zone.postCode}>{zone.adress}</Option>;
            })
          }
        </Select>
      </Form.Item>
    );
  }
}

InputAddress.propTypes = {
  zones: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedKey: PropTypes.number,
  hasError: PropTypes.bool.isRequired
};

export default InputAddress;
