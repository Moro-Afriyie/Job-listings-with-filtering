import { ADD_TO_FILTER_ARRAY, FILTER_JOB_LISTINGS } from "./actionTypes";

export const filterJObListingsAction = (data: string) => {
  return {
    type: FILTER_JOB_LISTINGS,
    payload: data,
  };
};

export const addToFilterArrayAction = (data: string) => {
  return {
    type: ADD_TO_FILTER_ARRAY,
    payload: data,
  };
};
