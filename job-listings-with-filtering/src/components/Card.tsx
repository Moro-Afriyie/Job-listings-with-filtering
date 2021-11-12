import * as React from "react";
import "../styles/Card.scss";
import dataInterface from "../models/interfaces";
import { useDispatch } from "react-redux";
import { addToFilterArray } from "../store/action";

const Card: React.FunctionComponent<dataInterface> = (props: dataInterface) => {
  const {
    company,
    logo,
    newP,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;
  const dispatch = useDispatch();

  return (
    <div
      className="card__container"
      style={
        featured ? { borderLeft: "4px solid #5ba4a4" } : { borderLeft: "none" }
      }
    >
      <div className="card__left">
        <div className="card__avatar">
          <img src={logo} alt="avatar" />
        </div>
        <div className="card__details">
          <div className="tags">
            <p className="company">{company}</p>
            {newP && <p className="new">new!</p>}
            {featured && <p className="featured">featured</p>}
          </div>
          <div className="tilte">
            <p className="position">{position}</p>
          </div>
          <div className="day">
            <p className="postedAT">{postedAt}</p>
            <i className="fas fa-circle"></i>
            <p className="contract">{contract}</p>
            <i className="fas fa-circle"></i>
            <p className="location">{location}</p>
          </div>
        </div>
      </div>
      <div className="card__right">
        <div
          className="card__tags"
          onClick={() => dispatch(addToFilterArray(role))}
        >
          <p>{role}</p>
        </div>
        <div
          className="card__tags"
          onClick={() => dispatch(addToFilterArray(level))}
        >
          <p>{level}</p>
        </div>
        {languages.map((language, index) => {
          return (
            <div
              className="card__tags"
              key={index}
              onClick={() => dispatch(addToFilterArray(language))}
            >
              <p>{language}</p>
            </div>
          );
        })}
        {tools.map((tool, index) => {
          return (
            <div
              className="card__tags"
              key={index}
              onClick={() => dispatch(addToFilterArray(tool))}
            >
              <p>{tools}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
