import { createSlice } from "@reduxjs/toolkit";
import { setCharactersSliceTypes } from "../../types/slicesTypes";

const initialState: setCharactersSliceTypes = {
  characters: [
    {
      name: "",
      image: "",
      status: "",
      id: null,
    },
  ],
  info: {
    pages: 0,
    notFoundError: false
  },
};

const allCharactersSlice = createSlice({
  name: "setCharactersSlice",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setNotFoundError: (state,action) => {
      state.info.notFoundError = action.payload
    }
  },
});

export const { setCharacters, setInfo, setNotFoundError } = allCharactersSlice.actions;
export default allCharactersSlice.reducer;
