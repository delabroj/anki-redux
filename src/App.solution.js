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

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <Counter
          count={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}

export default App;
