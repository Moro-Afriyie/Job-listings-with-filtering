import { FILTER_JOB_LISTINGS } from "./actionTypes";

export const filterJObListingsAction = (data: string) => {
  return {
    type: FILTER_JOB_LISTINGS,
  };
};
