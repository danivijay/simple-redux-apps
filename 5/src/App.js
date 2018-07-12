import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import RepoSearch from './RepoSearch'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RepoSearch />
      </Provider>
    );
  }
}

export default App;
