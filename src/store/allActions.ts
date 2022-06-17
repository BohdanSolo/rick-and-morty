import {setCurrentUser, removeUser} from "./slices/currentUserSlice";
import {allCharactersAsyncThunk} from "./asyncThunks/allCharactersAsyncThunk"
import {singleCharacterAsyncThunk} from "./asyncThunks/singleCharacterAsyncThunk"
import {setSingleCharacter} from "./slices/singleCharacterSlice"

export const allActions = {setCurrentUser, removeUser, singleCharacterAsyncThunk, allCharactersAsyncThunk, setSingleCharacter};
