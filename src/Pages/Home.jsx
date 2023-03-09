import { useState, useEffect } from "react";

import { CharactersList } from "../components/CharactersList/CharactersList";
import { getCharacters } from "../API/service.js";
import { Container } from "../components/Container/Container";
import { Filter } from "../components/Filter/Filter";
import { Logo } from "../components/Logo/Logo";
import { getCharactersByFilter } from "../API/service.js";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("search");

    const getCharacterByFilter = async () => {
      getCharactersByFilter(searchQuery)
        .then(setList)
        .catch((error) => console.log(error));
    };

    if (searchQuery) {
      getCharacterByFilter();
    } else {
      getCharacters().then((resp) => {
        setList(resp);
      });
    }
  }, []);

  const onFilterSubmit = (search) => {
    setSearchParams({
      search,
    });
    getCharactersByFilter(search).then(setList);
  };
  return (
    <Container>
      <Logo />
      <Filter onFilterSubmit={onFilterSubmit} />
      <CharactersList list={list} />
    </Container>
  );
};
