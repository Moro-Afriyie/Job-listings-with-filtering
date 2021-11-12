import { data } from "./../models/data";
import { stateInterface } from "../models/interfaces";
import { FILTER_JOB_LISTINGS } from "./actionTypes";

const initialState = {
  data: data,
  filterArray: [],
};
type Action = { type: typeof FILTER_JOB_LISTINGS; payload: string[] };
// | { type: typeof FILTER_ORIGINAL_DATA };

export const jobListingsReducer = (
  state: stateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case FILTER_JOB_LISTINGS: {
      const newData = state.data.filter((data) => {
        // create a new array containing the keywords
        const newArr = [
          data.role,
          data.level,
          ...data.languages,
          ...data.tools,
        ];

        if (newArr.length > action.payload.length) {
          // checks if the newArr contains all the keywords in the filtered array
          if (action.payload.every((ai) => newArr.includes(ai))) return data;
        } else {
          if (newArr.every((ai) => action.payload.includes(ai))) return data;
        }
      });
      return {
        ...state,
        data: newData,
        filterArray: [...action.payload],
      };
    }

    default:
      return state;
  }
};
