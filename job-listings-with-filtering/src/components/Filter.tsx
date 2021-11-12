import * as React from "react";
import "../styles/Filter.scss";
import close from "../assets/images/icon-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { stateInterface } from "../store/reducer";
import { addToFilterArrayAction } from "../store/action";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const filterArray = useSelector((state: stateInterface) => state.filterArray);
  console.log(filterArray);

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
        {/* <div className="filter__names">
          <p>Frontend</p>
          <div className="close">
            <img src={close} alt="close icon" />
          </div>
        </div>
        <div className="filter__names">
          <p>CSS</p>
          <div className="close">
            <img src={close} alt="close icon" />
          </div>
        </div>
        <div className="filter__names">
          <p>Javascript</p>
          <div className="close">
            <img src={close} alt="close icon" />
          </div>
        </div> */}
      </div>
      <p className="clear">Clear</p>
    </div>
  );
};

export default Filter;
