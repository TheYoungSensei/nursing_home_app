import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '../views/home';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
};

export default MainRoutes;
