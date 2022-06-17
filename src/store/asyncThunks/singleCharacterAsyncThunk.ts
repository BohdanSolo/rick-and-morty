import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CharacterTypes } from "../../types/apiTypes";
import { setSingleUser } from "../slices/singleCharacterSlice";
import { UIContext } from "../../UI/UIContext";
import { useContext } from "react";

export const singleCharacterAsyncThunk = createAsyncThunk(
  "singleCharacter/AsyncThunk",
  async (url: string, { dispatch }) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      const singleCharacter = data.map((character: CharacterTypes) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
          status: character.status,
          gender: character.gender,
          created: character.created,
          location: character.location?.name,
          episode: character.episode,
        };
      });
      dispatch(setSingleUser(singleCharacter));
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
