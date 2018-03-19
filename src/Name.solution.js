import React from 'react';
import { connect } from 'react-redux';

let Name = ({ onChange }) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
        type="text"
      />
      <button onClick={() => onChange(input.value)}>Update</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch({ type: 'SET_NAME', name });
  },
});
Name = connect(null, mapDispatchToProps)(Name);

export default Name;
