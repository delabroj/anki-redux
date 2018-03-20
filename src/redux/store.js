import { createStore, combineReducers } from 'redux';
import * as actions from './actions';

const initialCount = 0;
export const count = (state = initialCount, action) => {
  switch (action.type) {
    case actions.ACTION_INCREMENT:
      return state + 1;
    case actions.ACTION_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const initialName = '';
export const name = (state = initialName, action) => {
  switch (action.type) {
    case actions.ACTION_SET_NAME:
      return action.name;
    default:
      return state;
  }
};

const reducer = combineReducers({
  count,
  name,
});

export const store = createStore(reducer);
