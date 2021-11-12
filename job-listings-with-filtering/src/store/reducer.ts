import { data } from "./../models/data";
import { stateInterface } from "../models/interfaces";
import { RESET_STATE, FILTER_JOB_LISTINGS, CLOSE_ITEM } from "./actionTypes";

const initialState = {
  data: data,
  filterArray: [],
};
type Action =
  | { type: typeof FILTER_JOB_LISTINGS; payload: string[] }
  | { type: typeof RESET_STATE }
  | { type: typeof CLOSE_ITEM; payload: { filterArr: string[]; data: string } };

export const jobListingsReducer = (
  state: stateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case FILTER_JOB_LISTINGS: {
      const newData = data.filter((data) => {
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

    case RESET_STATE:
      return {
        ...state,
        data: initialState.data,
        filterArray: initialState.filterArray,
      };

    case CLOSE_ITEM: {
      const filterArr = action.payload.filterArr.filter(
        (elem) => elem !== action.payload.data
      );
      const newData = data.filter((data) => {
        // create a new array containing the keywords
        const newArr = [
          data.role,
          data.level,
          ...data.languages,
          ...data.tools,
        ];

        if (newArr.length > filterArr.length) {
          // checks if the newArr contains all the keywords in the filtered array
          if (filterArr.every((ai) => newArr.includes(ai))) return data;
        } else {
          if (newArr.every((ai) => filterArr.includes(ai))) return data;
        }
      });
      return {
        ...state,
        data: newData,
        filterArray: [...filterArr],
      };
    }

    default:
      return state;
  }
};
