import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import * as infirmiersActions from '../../redux/modules/infirmiers';
import Search from './Search';

const mapStateToProps = (state) => {
  return {
    // views
    currentView: state.views.currentView,
    infirmiers: state.infirmiers.infirmiers,
    searching: state.infirmiers.calculating
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      enterSearch: viewsActions.enterSearch,
      leaveSearch: viewsActions.leaveSearch,

      // infirmiers
      performSearch: infirmiersActions.performSearch

    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

