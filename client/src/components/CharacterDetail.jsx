import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const characters = useSelector((state) => state.characters);
  const character = characters.find((personaje) => personaje.id === +id);
  if (!character) return <div>No se encontro el personaje</div>;
  return (
    <div>
      <h1> {character.name}</h1>
      <img src={character.image} alt="character img" />
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <div>
        {character.episode.map((episode) => {
          let epi = episode.split("/").pop();
          return <p>{epi}</p>;
        })}
      </div>
    </div>
  );
};

export default CharacterDetail;
