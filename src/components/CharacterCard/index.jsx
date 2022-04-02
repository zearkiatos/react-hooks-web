import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./characterCard.css";
const CharacterCard = ({ character, onHandleClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <button onClick={() => onHandleClick(character)}>Add to Favorite</button>
      <figure className={`image-container ${theme}`}>
        <img src={character.image} alt={character.name} />
        <figcaption className={`details ${theme}`}>
          <p>
            <b>Name:</b> {character.name}
          </p>
          <p>
            <b>Species:</b> {character.species}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CharacterCard;
