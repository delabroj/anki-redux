import React from 'react';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

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
Counter = connect(mapStateToProps, actions)(Counter);

export default Counter;
