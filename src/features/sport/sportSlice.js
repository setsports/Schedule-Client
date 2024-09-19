import { createSlice } from '@reduxjs/toolkit';
import { getSports } from './Thunks';

const initialState = {
  sports: null,
};

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getSports.pending, (state, action) => {
        state.sports = null;
      })
      .addCase(getSports.fulfilled, (state, action) => {
        state.sports = action.payload;
      })
      .addCase(getSports.rejected, (state, action) => {
        state.sports = null;
      }),
});

export default sportSlice.reducer;
