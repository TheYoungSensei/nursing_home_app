

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions from '../../redux/modules/views';
import * as counterActions from '../../redux/modules/counter';
import Home from './Home';

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    counter: state.counter.value,
    loading: state.counter.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    enterHome: viewsActions.enterHome,
    leaveHome: viewsActions.leaveHome,
    increment: counterActions.increment,
    decrement: counterActions.decrement,
    double: counterActions.doubleAsync
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);