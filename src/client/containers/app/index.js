import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import * as viewsActions from '../../redux/modules/views';
import * as infirmiersActions from '../../redux/modules/infirmiers';
import App from './App';
import {withRouter} from 'react-router';


const mapStateToProps = (state) => {
  return {
    currentView: state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...viewsActions,
      getInfirmiers: infirmiersActions.getInfirmiers
    },
    dispatch
  );
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
