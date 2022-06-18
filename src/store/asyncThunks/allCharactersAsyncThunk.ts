import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CharacterTypes, ResponseTypes} from "../../types/apiTypes";
import {
    setCharacters,
    setInfo,
    setNotFoundError,
} from "../slices/allCharactersSlice";


export const allCharactersAsyncThunk = createAsyncThunk(
    "setCharacters/AsyncThunk",
    async (url: string, {dispatch}) => {
        try {
            const res = await axios.get<ResponseTypes>(url);
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

export const infoApiAsyncThunk = createAsyncThunk(
    "infoApi/AsyncThunk",
    async (url: string, {dispatch}) => {
        try {
            const res = await axios.get<ResponseTypes>(url);
            const data = res.data;
            const info = {
                pages: data.info.pages,
            };
            dispatch(setInfo(info));
        } catch (e) {
            if (e instanceof Error) {
                alert(e.message)
            }
        }
    }
);
