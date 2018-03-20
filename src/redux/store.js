import { createStore, combineReducers } from 'redux';
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

//

export const configureStore = () => {
  return createStore(reducer);
};
