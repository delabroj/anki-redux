import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  console.log('reducer:', action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  //

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
