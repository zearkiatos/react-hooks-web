import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters();
      console.log(response);
      setCharacters(response);
    };
    fetchCharacters();
  }, [url]);

  return characters;
};

export default useCharacters;
