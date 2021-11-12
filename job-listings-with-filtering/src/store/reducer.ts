import { data } from "./../models/data";
import dataInterface from "../models/interfaces";
import { ADD_TO_FILTER_ARRAY, FILTER_JOB_LISTINGS } from "./actionTypes";

export interface stateInterface {
  data: dataInterface[];
  filterArray: string[];
}

const initialState = {
  data: data,
  filterArray: [],
};
type Action =
  | { type: typeof FILTER_JOB_LISTINGS; payload: string }
  | { type: typeof ADD_TO_FILTER_ARRAY; payload: string };

export const jobListingsReducer = (
  state: stateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case FILTER_JOB_LISTINGS:
      return {
        ...state,
      };

    case ADD_TO_FILTER_ARRAY:
      return {
        ...state,
        filterArray: [...state.filterArray, action.payload],
      };

    default:
      return state;
  }
};
