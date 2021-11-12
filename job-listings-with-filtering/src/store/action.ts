import { ADD_TO_FILTER_ARRAY, FILTER_JOB_LISTINGS } from "./actionTypes";

export const filterJObListings = (data: string) => {
  return {
    type: FILTER_JOB_LISTINGS,
    payload: data,
  };
};

export const addToFilterArray = (data: string) => {
  return {
    type: ADD_TO_FILTER_ARRAY,
    payload: data,
  };
};
