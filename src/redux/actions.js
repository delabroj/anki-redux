export const ACTION_INCREMENT = 'INCREMENT';
export const ACTION_DECREMENT = 'DECREMENT';
export const incrementCounter = () => ({
  type: ACTION_INCREMENT,
});
export const decrementCounter = () => ({
  type: ACTION_DECREMENT,
});

export const ACTION_SET_NAME = 'SET_NAME';
export const setName = name => ({
  type: ACTION_SET_NAME,
  name,
});
