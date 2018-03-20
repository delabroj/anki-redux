import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as actions from './actions';

const initialList = [];
const list = (state = initialList, action) => {
  switch (action.type) {
    case actions.ACTION_SET_LIST:
      return action.list;
    default:
      return state;
  }
};

const reducer = combineReducers({
  list,
});

const promise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

export const configureStore = () => {
  return createStore(reducer, applyMiddleware(promise));
};
