import React from 'react';
import Home from './containers/Home';
import Test from './containers/testRoot';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gifted from './containers/Gifted';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/gifted">
          <Gifted />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
