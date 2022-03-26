import React, { useState, useEffect } from "react";
import config from "../../config";
import CharacterCard from "../CharacterCard";
import "./characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(
      `${config.RICKANDMORTY_API_BASE_URL}/character/`
    );
    const data = response.json();
    return data;
  };

  const renderCharacters = characters.map((character) => (
    <CharacterCard {...character} />
  ));

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);
  return (
    <div className="characters">
      <div className="characters-container">{renderCharacters}</div>
    </div>
  );
};

export default Characters;
