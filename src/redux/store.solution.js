import { createStore, combineReducers } from 'redux';

const initialCount = 0;
const count = (state = initialCount, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const ACTION_SET_NAME = 'SET_NAME';
export const createSetNameAction = name => ({
  type: ACTION_SET_NAME,
  name,
});

const initialName = '';
const name = (state = initialName, action) => {
  switch (action.type) {
    case ACTION_SET_NAME:
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
