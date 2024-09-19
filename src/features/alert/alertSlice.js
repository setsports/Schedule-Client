import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: {},
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { type, messageTxt } = action.payload;

      state.message = {
        type,
        messageTxt,
      };
    },
    clearMessages: (state, action) => {
      state.message = {};
    },
  },
});

export const { addMessage, clearMessages } = alertSlice.actions;
export default alertSlice.reducer;
