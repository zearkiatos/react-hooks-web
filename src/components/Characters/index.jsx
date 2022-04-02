import React, {
  Fragment,
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback
} from "react";
import config from "../../config";
import CharacterCard from "../CharacterCard";
import Search from "../Search";
import { FAVORITE_TYPES } from "../../types";
import "./characters.css";

const INITIAL_STATE = {
  favorites: []
};

const objectAction = (state, action) => ({
  [FAVORITE_TYPES.ADD_TO_FAVORITE]: {
    ...state,
    favorites: [...state.favorites, action.payload]
  }
});

const favoriteReducer = (state, action) => {
  return objectAction(state, action)[action.type] || state;
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, INITIAL_STATE);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const handleClick = (favorite) => {
    dispatch({
      type: FAVORITE_TYPES.ADD_TO_FAVORITE,
      payload: favorite
    });
  };

  const handleSearch = () => setSearch(searchInput.current.value);

  const handleSearchCallback = useCallback(handleSearch, []);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  const memoFilterdCharacters = useMemo(
    () => filteredCharacters,
    [characters, search]
  );
  const getCharacters = async () => {
    const response = await fetch(
      `${config.RICKANDMORTY_API_BASE_URL}/character/`
    );
    const data = response.json();
    return data;
  };

  const renderFavorites =
    state.favorites &&
    state.favorites.map(({ id, name }) => <li key={id}>{name}</li>);

  const renderCharacters = memoFilterdCharacters.map((character) => (
    <CharacterCard
      key={character.id}
      character={character}
      onHandleClick={handleClick}
    />
  ));

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);
  return (
    <Fragment>
      <Search
        value={search}
        handleSearch={handleSearchCallback}
        placeholder="Search 🔍"
        searchInput={searchInput}
      />
      <div className="characters">
        <ul>{renderFavorites}</ul>
        <div className="characters-container">{renderCharacters}</div>
      </div>
    </Fragment>
  );
};

export default Characters;
