import * as React from "react";
import "../styles/Filter.scss";
import close from "../assets/images/icon-remove.svg";
import { useSelector } from "react-redux";
import { stateInterface } from "../store/reducer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const filterArray = useSelector((state: stateInterface) => state.filterArray);

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
      <p className="clear">Clear</p>
    </div>
  );
};

export default Filter;
