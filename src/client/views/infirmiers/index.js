import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import * as infirmiersActions from '../../redux/modules/infirmiers';
import Infirmiers from './Infirmiers';

const mapStateToProps = (state) => {
  return {
    currentView: state.views.currentView,
    infirmiers: state.infirmiers.infirmiersToDisplay,
    tags: state.infirmiers.tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterInfirmiers: viewsActions.enterInfirmiers,
      leaveInfirmiers: viewsActions.leaveInfirmiers,
      newSearch: infirmiersActions.cancelSearch
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Infirmiers);

