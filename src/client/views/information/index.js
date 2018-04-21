import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import Information from './Information';


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
      enterInformation: viewsActions.enterInformation,
      leaveInformation: viewsActions.leaveInformation
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);
