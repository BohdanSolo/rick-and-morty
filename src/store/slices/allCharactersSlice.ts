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
    pages: 0
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
  },
});

export const { setCharacters, setInfo } = allCharactersSlice.actions;
export default allCharactersSlice.reducer;
