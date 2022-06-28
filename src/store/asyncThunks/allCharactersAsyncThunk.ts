import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CharacterTypes, ResponseCharactersTypes} from "../../types/apiTypes";
import {
    setCharacters,
    setInfo,
    setNotFoundError,
} from "../slices/allCharactersSlice";


export const allCharactersAsyncThunk = createAsyncThunk(
    "setCharacters/AsyncThunk",
    async (url: string, {dispatch}) => {
        try {
            const res = await axios.get<ResponseCharactersTypes>(url);
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
            const info = { pages: data.info.pages};
            dispatch(setInfo(info));
            dispatch(setNotFoundError(false));
        } catch (e) {
            if (e instanceof Error) {
                e.message === "Request failed with status code 404"
                    ? dispatch(setNotFoundError(true))
                    : dispatch(setNotFoundError(true));
            }
        }
    }
);
