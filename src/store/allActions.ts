import {setCurrentUser, removeUser} from "./slices/currentUserSlice";
import {setCharactersAsyncThunk} from "./asyncThunks/setCharactersAsyncThunk"

export const allActions = {setCurrentUser, removeUser, setCharactersAsyncThunk};
