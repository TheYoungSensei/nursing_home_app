import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class NurseButton extends PureComponent {
  render() {
    return (
      <div>
        <Link to='/infirmiers'>
          <img src="https://imgur.com/GVmeeOT.png" alt='Nurse'/>
        </Link>
      </div>
    )
  }
}

export default NurseButton;
