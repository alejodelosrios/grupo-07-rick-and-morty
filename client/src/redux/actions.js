import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_CHARACTERS = "FILTER_CHARACTERS";

export const getCharacters = () => async (dispatch) => {
  try {
    // Petición asincrona en el action
    let { data } = await axios.get("https://rickandmortyapi.com/api/character");
    console.log("CHARACTERS", "Se recibe data de la API");
    return dispatch({ type: GET_CHARACTERS, payload: data.results });
  } catch (error) {
    /* handle error */
    console.log(error);
  }
};
export const filterCharacters = (name) => {
  // Petición normal
  return { type: FILTER_CHARACTERS, payload: name };
};
