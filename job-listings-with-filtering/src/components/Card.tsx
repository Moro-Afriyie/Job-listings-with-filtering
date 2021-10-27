import * as React from "react";
import "../styles/Card.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICardProps {}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div className="card__container">
      <div className="card__left">
        <div className="card__avatar">
          <h1>avatar</h1>
        </div>
        <div className="card__details">
          <h1>details</h1>
        </div>
      </div>
      <div className="card__right">
        <div className="card__tags">
          <h1>tags</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
