import { createStore } from "redux";
import { jobListingsReducer } from "./reducer";

const store = createStore(jobListingsReducer);
