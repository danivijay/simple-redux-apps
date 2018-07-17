import createStore from './createStore';

const initialState = {
      count: 1,
};

const reducer = (state = initialState, action) => {
      console.log('requacker', action);
      return state;
};

const store = createStore(reducer);

// export default store;
