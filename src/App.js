import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { store } from './redux/store';
import Greeting from './Greeting';
import Name from './Name';
import Counter from './Counter';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <div>
        <Greeting />
        <Name />
        <Counter />
      </div>
    </Provider>
  </div>
);

export default App;
