var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import { render } from 'react-dom';
import injectTpEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'antd/dist/antd.css';
import Root from './Root';

smoothScrollPolyfill.polyfill();

window.__forceSmoothScrollPolyfill__ = true;

var ELEMENT_TO_BOOTSTRAP = 'root';
var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

var renderApp = function renderApp(RootComponent) {
  render(_jsx(AppContainer, {
    warnings: false
  }, void 0, _jsx(RootComponent, {})), BootstrapedElement);
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}