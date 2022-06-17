import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CharacterTypes } from "../../types/apiTypes";
import { setCharacters, setInfo } from "../slices/allCharactersSlice";
import { UIContext } from "../../UI/UIContext";
import { useContext } from "react";

export const allCharactersAsyncThunk = createAsyncThunk(
  "setCharacters/AsyncThunk",
  async (url: string, { dispatch }) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      const charactersList = data.results.map((character: CharacterTypes) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
          status: character.status,
        };
      });
      dispatch(setCharacters(charactersList));
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


export const infoApiAsyncThunk = createAsyncThunk(
    "infoApi/AsyncThunk",
    async (url: string, { dispatch }) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        const info = {
          pages: data.info.pages
        };
        dispatch(setInfo(info));
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