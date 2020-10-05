import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import GetStart from './pages/getStart';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solicitar-orcamento" component={GetStart}/>
      </Switch>
    </Router>
  )
}

export default Routes;