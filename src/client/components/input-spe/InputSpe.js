import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select, Row, Col } from 'antd';

const { Option } = Select;

class InputSpe extends PureComponent {
  render() {
    const { specialisations } = this.props;
    return (
      <Row>
        <Col span={1}/>
        <Col span={23}>
          <Select
            placeholder="Veuillez choisir une/plusieurs spécialisation(s)"
            allowClear={true}
            style={{ width: '100%' }}
            onChange={this.props.onChange}
            mode="multiple"
          >
            {
              specialisations.map((spe) => {
                return <Option key={spe} value={spe}>{spe}</Option>;
              })
            }
          </Select>
        </Col>
      </Row>
    )
  }
}

InputSpe.propTypes = {
  specialisations: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputSpe;
