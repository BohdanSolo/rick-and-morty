import {FavoriteTypes} from "../../types/slicesTypes";
import {createSlice} from "@reduxjs/toolkit";

const initialState: FavoriteTypes = {
    favoriteCharacters: [],
};


const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    setFavorite: (sate, action) => {
      sate.favoriteCharacters.push(action.payload)
    },
    removeFromFavorite: (sate, action) => {
      sate.favoriteCharacters = sate.favoriteCharacters.filter(character => character.id !== action.payload)
    }
  }
})

export const {setFavorite, removeFromFavorite} = favoriteSlice.actions;
export  default favoriteSlice.reducer