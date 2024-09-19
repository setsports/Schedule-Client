import { createSlice } from '@reduxjs/toolkit';
import { getChannels, getClientChannels } from './Thunks';

const initialState = {
  channels: null,
  clientChannels: null,
};

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.pending, (state, action) => {
        state.channels = null;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        state.channels = action.payload;
      })
      .addCase(getChannels.rejected, (state, action) => {
        state.channels = null;
      })
      .addCase(getClientChannels.pending, (state, action) => {
        state.clientChannels = null;
      })
      .addCase(getClientChannels.fulfilled, (state, action) => {
        state.clientChannels = action.payload;
      })
      .addCase(getClientChannels.rejected, (state, action) => {
        state.clientChannels = null;
      });
  },
});

export default channelSlice.reducer;
