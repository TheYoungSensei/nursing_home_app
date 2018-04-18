import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import Infirmiers from './Infirmiers';

const mapStateToProps = (state) => {
  return {
    //views
    currentView: state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      //views
      enterInfirmiers: viewsActions.enterInfirmiers,
      leaveInfirmiers: viewsActions.leaveInfirmiers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Infirmiers);

