const { createStore } = require("redux");

// defining constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// initialStates
const productInitialState = {
  products: ["Mango", "Apple", "iPhone"],
  numOfProducts: 3,
};

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

// reducer
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

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("Avacado"));
store.dispatch(addProducts("Avacado"));
