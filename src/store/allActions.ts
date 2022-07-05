import {setCurrentUser, removeUser} from './slices/currentUserSlice';
import {allCharactersAsyncThunk} from './asyncThunks/allCharactersAsyncThunk';
import {singleCharacterAsyncThunk} from './asyncThunks/singleCharacterAsyncThunk';
import {setSingleCharacter} from './slices/singleCharacterSlice';
import {setFavorite, removeFromFavorite} from './slices/favoriteSlice';
import {getLocationsAsyncThunk} from './asyncThunks/getLocationsAsyncThunk';


export const allActions = {
  setCurrentUser,
  removeUser,
  singleCharacterAsyncThunk,
  allCharactersAsyncThunk,
  setSingleCharacter,
  setFavorite,
  removeFromFavorite,
  getLocationsAsyncThunk,
};
