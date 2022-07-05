import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SetCharactersSliceTypes } from '../../types/slicesTypes';

const initialState: SetCharactersSliceTypes = {
  characters: [
    {
      name: '',
      image: '',
      status: '',
      id: null,
    },
  ],
  info: {
    pages: 0,
    notFoundError: false,
  },
};

const allCharactersSlice = createSlice({
  name: 'setCharactersSlice',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setNotFoundError: (state,action: PayloadAction<boolean>) => {
      state.info.notFoundError = action.payload;
    },
  },
});

export const { setCharacters, setInfo, setNotFoundError } = allCharactersSlice.actions;
export default allCharactersSlice.reducer;
