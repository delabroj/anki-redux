import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from './redux/actions';

let Counter = ({ count, incrementCounter, decrementCounter }) => (
  <div>
    <p>{count}</p>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </div>
);
const mapStateToProps = state => ({
  count: state.count,
});
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
