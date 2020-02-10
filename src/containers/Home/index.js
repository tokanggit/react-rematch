import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Checkout from '../../components/Checkout';

const Home = (props) => {
  const { increments, getUsers, user } = props;
  let userData = [];

  useEffect(() => {
    getUsers();
  }, []);

  if (user.data.length === 0) {
    console.log('tes');
  } else {
    userData = user.data;
  }

  return (
    <div>
      <h3>Total: <Checkout /></h3>
      <p>{JSON.stringify(userData)}</p>
      <button type="button" onClick={() => increments(1)}>Increment</button>
    </div>
  )
}

const mapState = (state) => ({user: state.user});

const mapDispatch = ({
  counter: {increments},
  user: {getUsers},
}) => ({ increments, getUsers });

export default connect(mapState, mapDispatch)(Home);