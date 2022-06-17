import { singleCharacterTypes } from "../../types/slicesTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: singleCharacterTypes = {
  user: {
    name: "",
    id: null,
    image: "",
    status: "",
    gender: "",
    location: "",
    episode: [],
    created: "",
  },
};

export const singleCharacterSlice = createSlice({
  name: "singleCharacterSlice",
  initialState,
  reducers: {
    setSingleUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setSingleUser } = singleCharacterSlice.actions;
export default singleCharacterSlice.reducer;
