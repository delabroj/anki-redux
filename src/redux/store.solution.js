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

const initialLoading = false;
const loading = (state = initialLoading, action) => {
  switch (action.type) {
    case actions.IS_LOADING:
      return true;
    case actions.DONE_LOADING:
      return false;
    default:
      return state;
  }
};

const reducer = combineReducers({
  list,
  loading,
});

const thunk = store => next => action => {
  if (typeof action === 'function') return action(store.dispatch);
  next(action);
};

export const configureStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
