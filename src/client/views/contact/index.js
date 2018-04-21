import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import Contact from './Contact';


const mapStateToProps = (state) => {
  return {
    // views
    currentView: state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      enterContact: viewsActions.enterContact,
      leaveContact: viewsActions.leaveContact
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
