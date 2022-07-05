import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {setSingleCharacter} from '../slices/singleCharacterSlice';
import {CharacterTypes} from '../../types/apiTypes';


export const singleCharacterAsyncThunk = createAsyncThunk(
  'singleCharacter/AsyncThunk',
  async (url: string, {dispatch}) => {
    try {
      const res = await axios.get<CharacterTypes>(url);
      const data = res.data;
      const singleCharacter = {
        name: data.name,
        id: data.id,
        image: data.image,
        status: data.status,
        species: data.species,
        gender: data.gender,
        created: data.created,
        location: data.location?.name,
        episode: data.episode,
      };
      dispatch(setSingleCharacter(singleCharacter));
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  },
);
