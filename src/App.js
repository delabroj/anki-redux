import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

const initialState = 0;

//

const store = createStore(reducer);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
    );
  }
}

export default App;
