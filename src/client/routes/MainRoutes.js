import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '../views/home';
import Search from '../views/search';
import Infirmiers from '../views/infirmiers';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search} />
      <Route exact path="/infirmiers" component={Infirmiers} />
    </Switch>
  );
};

export default MainRoutes;
