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

export const store = createStore(reducer);
