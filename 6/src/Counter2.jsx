import React, { Component } from 'react';

//import store from './redux';

// console.log(store);

class Counter2 extends Component {
      constructor() {
            super();

            // this.state = store.getState();
      }

      componentDidMount() {
            // this.unsub = store.subscribe(() => {
            //       this.setState(store.getState());
            // });
            // console.log(this.unsub);
      }

      componentWillUnmount() {
            // this.unsub();
      }

      handleClick = () => {
            const action = { type: 'INCREMENT' };
            // store.dispatch(action);
      };

      render() {
            return (
                  <div>
                        <h1>Counter #2</h1>
                        <p>Count: </p>
                        <button onClick={this.handleClick}>increment</button>
                  </div>
            );
      }
}

export default Counter2;
