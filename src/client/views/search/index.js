import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import Search from './Search';

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
      enterSearch: viewsActions.enterSearch,
      leaveSearch: viewsActions.leaveSearch
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

