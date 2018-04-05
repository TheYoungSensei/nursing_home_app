var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as viewsActions from '../../redux/modules/views';
import App from './App';
import { withRouter } from 'react-router';

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators(_extends({}, viewsActions), dispatch);
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);