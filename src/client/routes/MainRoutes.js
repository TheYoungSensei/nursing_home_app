import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '../views/home';
import Search from '../views/search';
import Infirmiers from '../views/infirmiers';
import About from '../views/about';
import Information from '../views/information';
import Contact from '../views/contact';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search} />
      <Route exact path="/infirmiers" component={Infirmiers} />
      <Route exact path="/information" component={Information} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};

export default MainRoutes;
