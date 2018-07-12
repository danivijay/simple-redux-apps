import React, { Component } from 'react';
import './App.css';
import store from './store'
import Lister from './Lister'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
          <Lister />
        </Provider>
      </div>
    );
  }
}

export default App;
