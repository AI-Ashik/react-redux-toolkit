import { createStore } from "redux";
import { countReducer } from "./services/reducer/counterReducer";

const store = createStore(countReducer);

export default store;
