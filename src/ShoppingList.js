import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <div>
        <h1>Your list:</h1>
        <ol>{this.props.list.map((item, i) => <li key={i}>{item}</li>)}</ol>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.list,
});
ShoppingList = connect(mapStateToProps, actions)(ShoppingList);

export { ShoppingList };
