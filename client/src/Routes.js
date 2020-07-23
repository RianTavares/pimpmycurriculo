import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./pages/Home";
import Body from "./Layout";

const Routes = () => {
  return (
    <Router>
      <Body>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Body>
    </Router>

  );
}

export default Routes;
