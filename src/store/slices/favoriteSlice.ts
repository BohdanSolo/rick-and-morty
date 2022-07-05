import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CharactersProps, FavoriteTypes} from '../../types/slicesTypes';

const initialState: FavoriteTypes = {
  favoriteCharacters: [],
};


const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    setFavorite: (sate, action: PayloadAction<CharactersProps>) => {
      sate.favoriteCharacters.push(action.payload);
    },
    removeFromFavorite: (sate, action:PayloadAction<number>) => {
      sate.favoriteCharacters = sate.favoriteCharacters.filter(character => character.id !== action.payload);
    },
  },
});

export const {setFavorite, removeFromFavorite} = favoriteSlice.actions;
export  default favoriteSlice.reducer;