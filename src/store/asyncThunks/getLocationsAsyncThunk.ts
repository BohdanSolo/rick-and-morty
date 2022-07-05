import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ResponseLocationsTypes } from '../../types/apiTypes';
import { getLocations, setIsFoundLocation, setLocationsInfo } from '../slices/getLocationsSlice';

export const getLocationsAsyncThunk = createAsyncThunk(
  'getLocationsSlice',
  async (url: string, { dispatch }) => {
    try {
      const res = await axios.get<ResponseLocationsTypes>(url);
      const resFilteredArr = res.data.results.map((location) => ({
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
      }));
      dispatch(getLocations(resFilteredArr));
      dispatch(setLocationsInfo(res.data.info.pages));
      dispatch(setIsFoundLocation(false));
    } catch (e) {
      if (e instanceof Error) {
        e.message === 'Request failed with status code 404'
          ? dispatch(setIsFoundLocation(true))
          : dispatch(setIsFoundLocation(false));
      }
    }
  },
);
