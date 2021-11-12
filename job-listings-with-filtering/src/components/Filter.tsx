import * as React from "react";
import "../styles/Filter.scss";
import close from "../assets/images/icon-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { stateInterface } from "../models/interfaces";
import { clearFilterArray } from "../store/action";

const Filter: React.FunctionComponent = () => {
  const filterArray = useSelector((state: stateInterface) => state.filterArray);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <div className="filter__container">
        {filterArray.map((data) => {
          return (
            <div key={data} className="filter__names">
              <p>{data}</p>
              <div className="close">
                <img src={close} alt="close icon" />
              </div>
            </div>
          );
        })}
      </div>
      <p className="clear" onClick={() => dispatch(clearFilterArray())}>
        Clear
      </p>
    </div>
  );
};

export default Filter;
