import React from 'react';
import { connect } from 'react-redux';

let Name = ({ onChange }) => <input type="text" onChange={e => onChange(e.target.value)} />;
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch({ type: 'SET_NAME', name });
  },
});
Name = connect(null, mapDispatchToProps)(Name);

export default Name;
