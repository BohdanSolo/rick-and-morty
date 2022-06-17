import { createSlice } from "@reduxjs/toolkit";
import { setCharactersSliceTypes } from "../../types/slicesTypes";

const initialState: setCharactersSliceTypes = {
  characters: [
    {
      name: "",
      image: "",
      id: null,
    },
  ],
  links: {
    prev: null,
    next: null,
  },
};

const setCharactersSlice = createSlice({
  name: "setCharactersSlice",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLinks: (state, action) => {
      state.links = action.payload;
    },
  },
});

export const { setCharacters, setLinks } = setCharactersSlice.actions;
export default setCharactersSlice.reducer;
