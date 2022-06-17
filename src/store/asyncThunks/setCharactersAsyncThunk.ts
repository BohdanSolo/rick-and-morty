import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CharacterTypes } from "../../types/apiTypes";
import { setCharacters, setLinks } from "../slices/setCharactersSlice";
import { UIContext } from "../../UI/UIContext";
import { useContext } from "react";

export const setCharactersAsyncThunk = createAsyncThunk(
  "setCharacters/AsyncThunk",
  async (url: string, { dispatch }) => {
    try {
      const res = await axios.get(url);
      const data = res.data();
      const charactersList = data.results.map((character: CharacterTypes) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
        };
      });
      dispatch(setCharacters(charactersList));
      const links = {
        prev: data.info.prev,
        next: data.info.next,
      };
      dispatch(setLinks(links));
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
