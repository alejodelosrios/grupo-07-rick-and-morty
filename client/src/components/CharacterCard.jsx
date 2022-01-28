import React from "react";

const CharacterCard = ({ id, name, image }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt="character img" />
    </div>
  );
};

export default CharacterCard;
