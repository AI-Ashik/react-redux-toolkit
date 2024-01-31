const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// defining products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// initial product States
const productInitialState = {
  products: ["Mango", "Apple", "iPhone"],
  numOfProducts: 3,
};

// products actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

// product reducer
const productsReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numOfProducts: state.numOfProducts + 1,
      };

    default:
      return state;
  }
};

// created redux store
const store = createStore(productsReducer, applyMiddleware(logger));

// subscribe redux store
store.subscribe(() => {
  console.log(store.getState());
});

// calling the product actions
store.dispatch(getProducts());
store.dispatch(addProducts("Avacado"));
