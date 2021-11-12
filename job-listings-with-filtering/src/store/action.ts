import { FILTER_JOB_LISTINGS, RESET_STATE } from "./actionTypes";

export const filterJObListings = (data: string[]) => {
  return {
    type: FILTER_JOB_LISTINGS,
    payload: data,
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
