const { createStore, combineReducers } = require("redux");

// defining products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// defining products constants
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// initial product States
const productInitialState = {
  products: ["Mango", "Apple", "iPhone"],
  numOfProducts: 3,
};

// initial cart States
const cartInitialState = {
  cart: ["TV"],
  numOfProducts: 1,
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

// cart actions
const getCart = () => {
  return {
    type: GET_CART,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART,
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

// cart reducer
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numOfProducts: state.numOfProducts + 1,
      };

    default:
      return state;
  }
};

// combining two reducers
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
});

// created redux store
const store = createStore(rootReducer);

// subscribe redux store
store.subscribe(() => {
  console.log(store.getState());
});

// calling the product actions
store.dispatch(getProducts());
store.dispatch(addProducts("Avacado"));

// calling the cart actions
store.dispatch(getCart());
store.dispatch(addCart("Monitor"));
