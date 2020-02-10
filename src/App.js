import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from './shared/store';
import Home from './containers/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
