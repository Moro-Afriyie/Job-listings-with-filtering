import { FILTER_JOB_LISTINGS, CLEAR_FILTER_ARRAY } from "./actionTypes";

export const filterJObListings = (data: string[]) => {
  return {
    type: FILTER_JOB_LISTINGS,
    payload: data,
  };
};

export const clearFilterArray = () => {
  return {
    type: CLEAR_FILTER_ARRAY,
  };
};
