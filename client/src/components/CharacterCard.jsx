import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, image }) => {
  return (
    <Link to={`/character/${id}`}>
      <h4>{name}</h4>
      <img src={image} alt="character img" />
    </Link>
  );
};

export default CharacterCard;
