import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export const getCharacters = async () => {
  try {
    const { data } = await instance.get();
    return data.results;
  } catch (error) {
    throw Error(error.message);
  }
};

export const getCharacterById = async (id) => {
  try {
    const { data } = await instance.get(`/${id}`);
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const getCharactersByFilter = async (filter) => {
  try {
    const { data } = await instance.get("/", {
      params: {
        name: filter,
      },
    });

    return data.results;
  } catch (error) {}
};
