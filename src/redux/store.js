import { createStore } from 'redux';

const initialState = {
  count: 0,
  name: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_NAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
};

export const store = createStore(reducer);
