import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class PatientButton extends PureComponent {
  render() {
    return (
      <div>
        <Link to='/search'>
          <img src="https://imgur.com/5ahC2P4.png" alt='Patient'/>
        </Link>
      </div>
    )
  }
}

export default PatientButton;
