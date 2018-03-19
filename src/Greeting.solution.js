import React from 'react';
import { connect } from 'react-redux';

let Greeting = ({ name }) => <h1>Welcome to the counter, {name ? name : 'visitor'}</h1>;
const mapStateToProps = (state, ownProps) => ({
  name: ownProps.isPresident ? 'Mr. President' : state.name,
});
Greeting = connect(mapStateToProps)(Greeting);

export default Greeting;
