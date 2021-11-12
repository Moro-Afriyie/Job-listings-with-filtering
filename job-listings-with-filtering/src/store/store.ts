import { createStore } from "redux";
import { jobListingsReducer } from "./reducer";

const store = createStore(jobListingsReducer);

export default store;

export type IRootState = typeof jobListingsReducer;
