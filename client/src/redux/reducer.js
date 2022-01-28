import { GET_CHARACTERS } from "./actions";

const initialState = {
  characters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
