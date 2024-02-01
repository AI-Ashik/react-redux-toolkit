// Importing necessary modules
const axios = require("axios");
const { applyMiddleware, createStore } = require("redux");
const thunk = require("redux-thunk").default;

// Constants for action types and API URL
const GET_REQUEST = "GET_REQUEST";
const SUCCESS_REQUEST = "SUCCESS_REQUEST";
const FAILED_REQUEST = "FAILED_REQUEST";
const API = "https://jsonplaceholder.typicode.com/todos";

// Initial state for the request
const requestInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Action creators for request states
const getRequest = () => ({ type: GET_REQUEST });
const successRequest = (data) => ({ type: SUCCESS_REQUEST, payload: data });
const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

// Reducer function to manage request state
const requestReducer = (state = requestInitialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, isLoading: true };
    case SUCCESS_REQUEST:
      return { ...state, isLoading: false, data: action.payload };
    case FAILED_REQUEST:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Thunk action creator to fetch data asynchronously
const fetchData = () => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get(API);
      const titles = response.data.map((item) => item.title);
      dispatch(successRequest(titles));
    } catch (error) {
      dispatch(failedRequest(error.message));
    }
  };
};

// Creating Redux store with middleware
const store = createStore(requestReducer, applyMiddleware(thunk));

// Subscribing to store for state updates
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching fetchData to initiate API call
store.dispatch(fetchData());
