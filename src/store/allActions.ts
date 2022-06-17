import {setCurrentUser, removeUser} from "./slices/currentUserSlice";
import {allCharactersAsyncThunk} from "./asyncThunks/allCharactersAsyncThunk"
import {singleCharacterAsyncThunk} from "./asyncThunks/singleCharacterAsyncThunk"

export const allActions = {setCurrentUser, removeUser, singleCharacterAsyncThunk, allCharactersAsyncThunk};
