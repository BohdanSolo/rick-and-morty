import {SingleCharacterTypes} from "../../types/slicesTypes";
import {createSlice} from "@reduxjs/toolkit";

const initialState: SingleCharacterTypes = {
    character: {
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
        setSingleCharacter: (state, action) => {
            state.character = action.payload;
        },
    },
});

export const {setSingleCharacter} = singleCharacterSlice.actions;
export default singleCharacterSlice.reducer;
