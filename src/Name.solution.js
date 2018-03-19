import React from 'react';
import { connect } from 'react-redux';

import { createSetNameAction } from './redux/store';

let Name = ({ onChange }) => <input type="text" onChange={e => onChange(e.target.value)} />;
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch(createSetNameAction(name));
  },
});
Name = connect(null, mapDispatchToProps)(Name);

export default Name;
