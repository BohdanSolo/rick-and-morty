import { createSlice } from "@reduxjs/toolkit";
import { currentUserSliceTypes } from "../../types/slicesTypes";


const initialState: currentUserSliceTypes =  {
      name: "",
      email: "",
      img: "",
    };

const currentUserSlice = createSlice({
  name: "currentUserSlice ",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.img = action.payload.img;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      if (state.img) {
        state.img = "";
      }
    },
  },
});

export const { setCurrentUser, removeUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
