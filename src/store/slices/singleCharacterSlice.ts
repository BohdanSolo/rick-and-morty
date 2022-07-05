import {createSlice} from '@reduxjs/toolkit';

import {SingleCharacterTypes} from '../../types/slicesTypes';

const initialState: SingleCharacterTypes = {
  character: {
    name: '',
    id: null,
    image: '',
    status: '',
    species: '',
    gender: '',
    location: '',
    episode: [],
    created: '',
  },
};

export const singleCharacterSlice = createSlice({
  name: 'singleCharacterSlice',
  initialState,
  reducers: {
    setSingleCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const {setSingleCharacter} = singleCharacterSlice.actions;
export default singleCharacterSlice.reducer;
