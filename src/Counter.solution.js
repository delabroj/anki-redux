import React from 'react';
import { connect } from 'react-redux';

let Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
const mapStateToProps = state => ({
  count: state,
});
const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch({ type: 'INCREMENT' });
  },
  onDecrement() {
    dispatch({ type: 'DECREMENT' });
  },
});
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
