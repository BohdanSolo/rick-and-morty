import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {LocationsSliceTypes} from '../../types/slicesTypes';

const initialState: LocationsSliceTypes = {
  locations: [],
  locationsInfo: {
    pages: 0,
    notFoundError: false,
  },
};

const getLocationsSlice = createSlice({
  name: 'getLocations',
  initialState,
  reducers: {
    getLocations: (state, action) => {
      state.locations = action.payload;
    },
    setLocationsInfo: (state, action) => {
      state.locationsInfo.pages = action.payload;
    },
    setIsFoundLocation: (state,action: PayloadAction<boolean>) => {
      state.locationsInfo.notFoundError = action.payload;
    },
  },
});

export const {getLocations, setLocationsInfo, setIsFoundLocation} = getLocationsSlice.actions;
export default getLocationsSlice.reducer;
