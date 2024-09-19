import { createSlice } from '@reduxjs/toolkit';
import { getWeek } from './Thunks';

const initialState = {
  week: {
    start: null,
    end: null,
  },
};

const weekSlice = createSlice({
  name: 'week',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeek.pending, (state, action) => {
        state.week = {
          start: null,
          end: null,
        };
      })
      .addCase(getWeek.fulfilled, (state, action) => {
        state.week = {
          start: action.payload.start,
          end: action.payload.end,
        };
      })
      .addCase(getWeek.rejected, (state, action) => {
        state.week = {
          start: null,
          end: null,
        };
      });
  },
});

export const {} = weekSlice.actions;
export default weekSlice.reducer;
