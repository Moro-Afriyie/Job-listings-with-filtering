import { data } from "./../models/data";
import { stateInterface } from "../models/interfaces";
import {
  ADD_TO_FILTER_ARRAY,
  FILTER_JOB_LISTINGS,
  FILTER_ORIGINAL_DATA,
} from "./actionTypes";

const initialState = {
  data: data,
  filterArray: [],
};
type Action =
  | { type: typeof FILTER_JOB_LISTINGS; payload: string[] }
  | { type: typeof ADD_TO_FILTER_ARRAY; payload: string[] }
  | { type: typeof FILTER_ORIGINAL_DATA };

export const jobListingsReducer = (
  state: stateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case FILTER_JOB_LISTINGS: {
      const newData = state.data.filter((data) => {
        const newArr = [
          data.role,
          data.level,
          ...data.languages,
          ...data.tools,
        ];
        if (newArr.length > action.payload.length) {
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
