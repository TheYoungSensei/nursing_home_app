import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import * as infirmiersActions from '../../redux/modules/infirmiers';
import Infirmiers from './Infirmiers';

const mapStateToProps = (state) => {
  return {
    //views
    currentView: state.views.currentView,
    infirmiers: state.infirmiers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      //views
      enterInfirmiers: viewsActions.enterInfirmiers,
      leaveInfirmiers: viewsActions.leaveInfirmiers,
      getInfirmiers: infirmiersActions.getInfirmiers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Infirmiers);

