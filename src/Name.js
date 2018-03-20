import React from 'react';
import { connect } from 'react-redux';

import { setName } from './redux/store';

let Name = ({ onChange }) => <input type="text" onChange={e => onChange(e.target.value)} />;
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch(setName(name));
  },
});
Name = connect(null, mapDispatchToProps)(Name);

export default Name;
