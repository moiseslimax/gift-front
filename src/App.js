import React from 'react';
import Home from './containers/Home';
import Test from './containers/testRoot';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gifted from './containers/Gifted';
import Spend from './containers/Spend';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/spend">
            <Spend />
          </Route>
          <Route path="/gifted">
            <Gifted />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
