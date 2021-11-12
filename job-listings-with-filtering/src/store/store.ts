import { createStore } from "redux";
import { jobListingsReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(jobListingsReducer, composeWithDevTools());

export default store;

export type IRootState = typeof jobListingsReducer;
