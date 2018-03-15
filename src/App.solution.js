import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { store } from './redux/store';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
