import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from './redux/store';

let Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
const mapStateToProps = state => ({
  count: state.count,
});
const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(incrementCounter());
  },
  onDecrement() {
    dispatch(decrementCounter());
  },
});
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
