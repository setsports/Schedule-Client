import { createSlice, current } from '@reduxjs/toolkit';
import { getWorkspaces } from './Thunks';

const initialState = {
  workspaces: null,
  currentWorkspace: null,
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setCurrentWorkspace: (state, action) => {
      state.currentWorkspace = action.payload;
      localStorage.setItem('currentWorkspace', action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getWorkspaces.pending, (state, action) => {
        state.workspaces = null;
      })
      .addCase(getWorkspaces.fulfilled, (state, action) => {
        state.workspaces = action.payload;
      })
      .addCase(getWorkspaces.rejected, (state, action) => {
        state.workspaces = null;
      }),
});

export const { setCurrentWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
