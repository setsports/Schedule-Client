import { createSlice } from '@reduxjs/toolkit';
import { getAppCountries, getClientCountries, getCountries } from './Thunks';

const initialState = {
  countries: null,
  clientCountries: null,
  appCountries: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state, action) => {
        state.countries = null;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.countries = null;
      })
      .addCase(getClientCountries.pending, (state, action) => {
        state.clientCountries = null;
      })
      .addCase(getClientCountries.fulfilled, (state, action) => {
        state.clientCountries = action.payload;
      })
      .addCase(getClientCountries.rejected, (state, action) => {
        state.clientCountries = null;
      })
      .addCase(getAppCountries.pending, (state, action) => {
        state.clientCountries = null;
      })
      .addCase(getAppCountries.fulfilled, (state, action) => {
        state.clientCountries = action.payload;
      })
      .addCase(getAppCountries.rejected, (state, action) => {
        state.clientCountries = null;
      });
  },
});

export default countrySlice.reducer;
