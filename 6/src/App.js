import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Counter1 from './Counter1';

class App extends Component {
      render() {
            return (
                  <BrowserRouter>
                        <div className="App">
                              <nav>
                                    <Link to="/">Root</Link>&nbsp;
                                    <Link to="/counter1">Counter #1</Link>&nbsp;
                                    <Link to="/counter2">Counter #2</Link>&nbsp;
                              </nav>

                              <Route path="/counter1" component={Counter1} />
                        </div>
                  </BrowserRouter>
            );
      }
}

export default App;
