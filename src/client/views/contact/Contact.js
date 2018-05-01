/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Contact extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterContact: PropTypes.func.isRequired,
    leaveContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {enterContact } = this.props;
    enterContact();
  }

  componentWillUnmount() {
    const {leaveContact} = this.props;
    leaveContact();
  }

  render() {
    return (
      <div>
        <h3>Contact</h3>
        <p>En cas de besoin, vous pouvez nous contacter via cette adresse mail : <a href="mailto:sacre?christopher@hotmail.com?subject=">sacre.christopher@hotmail.com</a></p>
      </div>
    );
  }
}

export default Contact;
