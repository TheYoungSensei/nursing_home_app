import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore, {history} from './redux/store/configureStore';
import App from './containers/app';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <Switch>
              <App/>
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default Root;
