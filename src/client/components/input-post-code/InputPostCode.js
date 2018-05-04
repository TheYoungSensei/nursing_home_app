import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Select, Row, Col } from 'antd';

const Option = Select.Option;

class InputPostCode extends PureComponent {
  render() {
    const { zones, selectedKey, hasError } = this.props;
    const sortedZones = zones.sort((zone1, zone2) => zone1.postCode - zone2.postCode);
    return (
      <Row>
        <Col span={1}/>
        <Col span={23}>
          <Form.Item
            validateStatus={hasError?'error':''}
          >
            <Select
              placeholder="Veuillez choisir un code postal"
              allowClear={true}
              style={{ width: '100%' }}
              value={selectedKey}
              onChange={this.props.onChange}
            >
              {
                sortedZones.map((zone) => {
                  return <Option key={zone.postCode} value={zone.postCode}>{zone.postCode}</Option>;
                })
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

InputPostCode.propTypes = {
  zones: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedKey: PropTypes.number,
  hasError: PropTypes.bool.isRequired
};

export default InputPostCode;
