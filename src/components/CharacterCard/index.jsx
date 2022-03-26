import React from "react";
import "./characterCard.css";
const CharacterCard = ({ name, image, species }) => {
  return (
    <div className="card">
      <figure className="image-container">
        <img src={image} alt={name} />
      </figure>
      <caption className="details">
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Species:</b> {species}
        </p>
      </caption>
    </div>
  );
};

export default CharacterCard;
