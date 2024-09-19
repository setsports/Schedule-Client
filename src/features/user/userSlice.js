import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, getUser, getUsers, logoutUser } from './Thunks';

const initialState = {
  user: null,
  users: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.user = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.users = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users = null;
      })
      .addCase(checkAuth.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = 'fulfilled';
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = '';
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
