import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import './App.css';
import { configureStore } from './redux/store';

import { ShoppingList } from './ShoppingList';

const Root = () => (
  <div>
    <ShoppingList />
  </div>
);

const App = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/(:prefix)" component={Root} />
      </Router>
    </div>
  </Provider>
);

export default App;
