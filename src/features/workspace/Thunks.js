import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../http/http';
import { addMessage, clearMessages } from '../alert/alertSlice';

const setupMessage = (type, messageTxt, dispatch) => {
  const payload = {
    type,
    messageTxt,
  };
  dispatch(addMessage(payload));

  setTimeout(() => {
    dispatch(clearMessages());
  }, 1500);
};

export const createWorkspace = createAsyncThunk(
  '/workspace/create',
  async (payload) => {
    const { name, dispatch } = payload;

    try {
      await http.post('/workspace/create', { name });

      const payload = {
        type: 'success',
        messageTxt: 'Successfully created a workspace',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/workspaces';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const modifyWorkspace = createAsyncThunk(
  '/workspace/modify',
  async (payload) => {
    const { name, id, dispatch } = payload;

    try {
      await http.put(`/workspace/modify/${id}`, { name });

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified a workspace',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/workspaces';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteWorkspace = createAsyncThunk(
  '/workspace/delete',
  async (payload) => {
    const { id, dispatch } = payload;

    try {
      await http.delete(`/workspace/delete/${id}`);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully deleted a workspace',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/workspaces';
      }, 500);
    } catch (err) {
      throw err;
    }
  }
);

export const getWorkspaces = createAsyncThunk('/workspace/all', async () => {
  try {
    const res = await http.get('/workspace/all');

    return res.data.workspaces;
  } catch (err) {
    throw err;
  }
});
