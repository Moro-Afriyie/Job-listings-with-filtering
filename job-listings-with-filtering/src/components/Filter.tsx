import * as React from "react";
import "../styles/Filter.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  return (
    <div className="filter">
      <h1>Filter</h1>
    </div>
  );
};

export default Filter;
