import * as React from "react";
import "../styles/Filter.scss";
import close from "../assets/images/icon-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { stateInterface } from "../models/interfaces";
import { closeItem, resetState } from "../store/action";

const Filter: React.FunctionComponent = () => {
  const filteredArray = useSelector(
    (state: stateInterface) => state.filteredArray
  );
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <div className="filter__container">
        {filteredArray.map((data) => {
          return (
            <div key={data} className="filter__names">
              <p>{data}</p>
              <div
                className="close"
                onClick={() =>
                  dispatch(closeItem({ filterArr: filteredArray, data }))
                }
              >
                <img src={close} alt="close icon" />
              </div>
            </div>
          );
        })}
      </div>
      <p className="clear" onClick={() => dispatch(resetState())}>
        Clear
      </p>
    </div>
  );
};

export default Filter;
