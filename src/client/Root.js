import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import App from './containers/app';
import history from './routes/memoryHistory';
import { LocaleProvider } from 'antd';
import frBe from 'antd/lib/locale-provider/fr_BE';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <Switch>
              <LocaleProvider locale={frBe}>
                <App/>
              </LocaleProvider>
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default Root;
