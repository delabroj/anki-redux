import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

let Greeting = ({ name }) => <h1>Welcome to the counter, {name ? name : 'visitor'}</h1>;
const mapStateToProps = (state, ownProps) => ({
  name: ownProps.params.prefix ? ownProps.params.prefix + ' ' + state.name : state.name,
});
Greeting = withRouter(connect(mapStateToProps)(Greeting));

export default Greeting;
