import { createStore, combineReducers } from 'redux';
import { saveState, loadState } from './localStorage';

const ACTION_INCREMENT = 'INCREMENT';
const ACTION_DECREMENT = 'DECREMENT';
export const incrementCounter = () => ({
  type: ACTION_INCREMENT,
});
export const decrementCounter = () => ({
  type: ACTION_DECREMENT,
});

const initialCount = 0;
const count = (state = initialCount, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return state + 1;
    case ACTION_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const ACTION_SET_NAME = 'SET_NAME';
export const setName = name => ({
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

const initialState = loadState();

export const store = createStore(reducer, initialState);

store.subscribe(() =>
  saveState({
    name: store.getState().name,
  })
);
