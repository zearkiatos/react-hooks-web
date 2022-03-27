import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./characterCard.css";
const CharacterCard = ({ name, species, image }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <figure className={`image-container ${theme}`}>
        <img src={image} alt={name} />
        <figcaption className={`details ${theme}`}>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Species:</b> {species}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CharacterCard;
