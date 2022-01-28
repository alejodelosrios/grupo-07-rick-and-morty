import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

const CharactersContainer = () => {
  const characters = useSelector((state) => state.characters);
  return (
    <div>
      {characters.length > 0 ? (
        characters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))
      ) : (
        <p>No cargaron los personajes</p>
      )}
    </div>
  );
};

export default CharactersContainer;
