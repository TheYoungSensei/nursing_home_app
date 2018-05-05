/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Row, Col } from 'antd';
import {appConfig} from '../../config';

class InputSexe extends PureComponent {
  handleMale = (event) => {
    const { onChange } = this.props;
    onChange({ type: appConfig.sexe.male, value: event.target.checked });
  };

  handleFemale = (event) => {
    const { onChange } = this.props;
    onChange({ type: appConfig.sexe.female, value: event.target.checked });
  };

  render() {
    const { selectedSexe } = this.props;
    return(
      <Row>
        <Col span={1}/>
        <Col span={23}>
          <div style={{width: '100%', textAlign: 'left'}}>
            Veuillez choisir un genre :
            <div style={{ marginLeft: '15px'}}>
              <Row>
                <Checkbox checked={selectedSexe === appConfig.sexe.male} onChange={this.handleMale}>Homme</Checkbox>
              </Row>
              <Row>
                <Checkbox checked={selectedSexe === appConfig.sexe.female} onChange={this.handleFemale}>Femme</Checkbox>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

InputSexe.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedSexe: PropTypes.number
};

export default InputSexe;
