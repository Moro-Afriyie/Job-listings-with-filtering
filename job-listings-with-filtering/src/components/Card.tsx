import * as React from "react";
import "../styles/Card.scss";
import account from "../assets/images/account.svg";
import dataInterface from "../models/interfaces";

const Card: React.FunctionComponent<dataInterface> = (props: dataInterface) => {
  return (
    <div className="card__container">
      <div className="card__left">
        <div className="card__avatar">
          <img src={account} alt="avatar" />
        </div>
        <div className="card__details">
          <div className="tags">
            <p className="company">Photosnap</p>
            <p className="new">new!</p>
            <p className="featured">featured</p>
          </div>
          <div className="tilte">
            <p className="position">Senior Frontend developer</p>
          </div>
          <div className="day">
            <p className="postedAT">1d ago</p>
            <i className="fas fa-circle"></i>
            <p className="contract">Full time</p>
            <i className="fas fa-circle"></i>
            <p className="location">USA only</p>
          </div>
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
