import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NurseButton extends PureComponent {
  render() {
    const { click } = this.props;
    return (
      <div onClick={click}>
        <Link to='/'>
          <img src="https://imgur.com/GVmeeOT.png" alt='Nurse'/>
        </Link>
      </div>
    );
  }
}

NurseButton.propTypes = {
  click: PropTypes.func.isRequired
};

export default NurseButton;
