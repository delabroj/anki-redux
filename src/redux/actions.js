import { fakeFetch } from '../api/fakeFetch';

export const ACTION_SET_LIST = 'SET_LIST';
const setList = list => ({
  type: ACTION_SET_LIST,
  list,
});

export const fetchList = () => {
  return fakeFetch().then(setList);
};
