import {setCurrentUser, removeUser} from "./slices/currentUserSlice";
import {allCharactersAsyncThunk, infoApiAsyncThunk} from "./asyncThunks/allCharactersAsyncThunk"
import {singleCharacterAsyncThunk} from "./asyncThunks/singleCharacterAsyncThunk"
import {setSingleCharacter} from "./slices/singleCharacterSlice"
import {setFavorite, removeFromFavorite} from "./slices/favoriteSlice";


export const allActions = {
    setCurrentUser,
    removeUser,
    singleCharacterAsyncThunk,
    allCharactersAsyncThunk,
    setSingleCharacter,
    infoApiAsyncThunk,
    setFavorite,
    removeFromFavorite
};
