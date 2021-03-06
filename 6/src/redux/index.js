import { createStore } from 'redux';

const initialState = {
      count: 0,
};

const reducer = (state = initialState, action) => {
      console.log('reducer', action);
      switch (action.type) {
            case 'INCREMENT':
                  console.log('state.count', state.count);
                  return Object.assign(
                        {},
                        {
                              ...state,
                              count: state.count + 1,
                        },
                  );
            default:
                  return state;
      }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
