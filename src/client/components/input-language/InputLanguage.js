/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Checkbox } from 'antd';

class InputLanguage extends PureComponent {
  handleFr = (event) => {
    const { onChange } = this.props;
    onChange({ lan: 'Français', value: event.target.checked });
  };

  handleNl = (event) => {
    const { onChange } = this.props;
    onChange({ lan: 'Néerlandais', value: event.target.checked });
  };

  handleEn = (event) => {
    const { onChange } = this.props;
    onChange({ lan: 'Anglais', value: event.target.checked });
  };

  handleDl = (event) => {
    const { onChange } = this.props;
    onChange({ lan: 'Allemand', value: event.target.checked });
  };

  render() {
    return(
      <div style={{width: '100%', textAlign: 'left'}}>
        Veuillez une/plusieurs langues :
        <div style={{ marginLeft: '15px'}}>
          <Row>
            <Checkbox onChange={this.handleFr}>Français</Checkbox>
          </Row>
          <Row>
            <Checkbox onChange={this.handleNl}>Néerlandais</Checkbox>
          </Row>
          <Row>
            <Checkbox onChange={this.handleEn}>Anglais</Checkbox>
          </Row>
          <Row>
            <Checkbox onChange={this.handleDl}>Allemand</Checkbox>
          </Row>
        </div>
      </div>
    );
  }
}

InputLanguage.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputLanguage;
