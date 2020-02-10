import React from 'react';
import { connect } from 'react-redux';

const Checkout = ({counter}) => (
  <div>{counter.data}</div>
);

const mapState = (state) => ({counter: state.counter});

export default connect(mapState, null)(Checkout);