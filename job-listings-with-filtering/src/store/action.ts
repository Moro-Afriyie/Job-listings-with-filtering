import { CLOSE_ITEM, FILTER_JOB_LISTINGS, RESET_STATE } from "./actionTypes";

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

export const closeItem = (data: { filterArr: string[]; data: string }) => {
  return {
    type: CLOSE_ITEM,
    payload: data,
  };
};
