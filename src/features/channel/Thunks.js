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

export const createChannel = createAsyncThunk(
  'channel/create',
  async (payload) => {
    const { data, dispatch } = payload;

    try {
      await http.post('/channel/create', data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully created a channel',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/channels';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const modifyChannel = createAsyncThunk(
  'channel/modify',
  async (payload) => {
    const { id, data, dispatch } = payload;

    try {
      await http.put(`/channel/modify/${id}`, data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified a channel',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/channels';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteChannel = createAsyncThunk(
  'channel/delete',
  async (payload) => {
    const { id, dispatch } = payload;

    try {
      await http.delete(`/channel/delete/${id}`);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully deleted a channel',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/channels';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const getChannels = createAsyncThunk('channel/all', async (dispatch) => {
  try {
    const res = await http.get('/channel/all');

    return res.data.channels;
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const getClientChannels = createAsyncThunk(
  'channel/client',
  async (payload) => {
    const { country, dispatch } = payload;

    try {
      const res = await http.post('/channel/client', { country });

      return res.data.channels;
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);
