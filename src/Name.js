import React from 'react';
import { connect } from 'react-redux';

import { setName } from './redux/store';

let Name = ({ onChange }) => {
  let input;

  return (
    <div>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onChange(input.value);
          input.value = '';
        }}
      >
        Update
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch(setName(name));
  },
});
Name = connect(null, mapDispatchToProps)(Name);

export default Name;
