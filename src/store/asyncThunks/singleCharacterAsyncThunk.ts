import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setSingleCharacter } from "../slices/singleCharacterSlice";
import { UIContext } from "../../UI/UIContext";
import { useContext } from "react";

export const singleCharacterAsyncThunk = createAsyncThunk(
  "singleCharacter/AsyncThunk",
  async (url: string, { dispatch }) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      const singleCharacter = {
          name: data.name,
          id: data.id,
          image: data.image,
          status: data.status,
          gender: data.gender,
          created: data.created,
          location: data.location?.name,
          episode: data.episode,
      };
      dispatch(setSingleCharacter(singleCharacter));
    } catch (e) {
      if (e instanceof Error) {
        const { setAlert } = useContext(UIContext);
        setAlert({
          show: true,
          severity: "error",
          message: e.message,
        });
      }
    }
  }
);
