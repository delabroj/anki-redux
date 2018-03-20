import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import './App.css';
import { store } from './redux/store';
import Counter from './Counter';

const Root = () => (
  <div>
    <Counter />
  </div>
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/(:prefix)" component={Root} />
      </Router>
    </div>
  </Provider>
);

export default App;
