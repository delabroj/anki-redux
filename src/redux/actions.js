import { fakeFetch } from '../api/fakeFetch';

export const ACTION_SET_LIST = 'SET_LIST';
const setList = list => ({
  type: ACTION_SET_LIST,
  list,
});

export const IS_LOADING = 'IS_LOADING';
export const DONE_LOADING = 'DONE_LOADING';
const isLoading = () => ({
  type: IS_LOADING,
});
const doneLoading = () => ({
  type: DONE_LOADING,
});

export const fetchList = () => dispatch => {
  dispatch(isLoading());
  fakeFetch()
    .then(list => {
      dispatch(setList(list));
    })
    .finally(() => dispatch(doneLoading()));
};
