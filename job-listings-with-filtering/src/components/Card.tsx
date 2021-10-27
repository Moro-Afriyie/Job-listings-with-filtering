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
          <p>Frontend</p>
        </div>
        <div className="card__tags">
          <p>Senior</p>
        </div>
        <div className="card__tags">
          <p>HTML</p>
        </div>
        <div className="card__tags">
          <p>CSS</p>
        </div>
        <div className="card__tags">
          <p>Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
