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

export const createSport = createAsyncThunk(
  '/sport/create',
  async (payload) => {
    const { data, dispatch } = payload;
    const { name, platforms } = data;

    try {
      await http.post('/sport/create', { name, platforms });

      const payload = {
        type: 'success',
        messageTxt: 'Successfully created a sport',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/sports';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const modifySport = createAsyncThunk(
  '/sport/modify',
  async (payload) => {
    const { id, data, dispatch } = payload;

    try {
      await http.put(`/sport/modify/${id}`, { data });

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified a sport',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/sports';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteSport = createAsyncThunk(
  '/sport/delete',
  async (payload) => {
    const { id, dispatch } = payload;

    try {
      await http.delete(`/sport/delete/${id}`);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully deleted a sport',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/sports';
      }, 500);
    } catch (err) {
      throw err;
    }
  }
);

export const getSports = createAsyncThunk('/sport/all', async () => {
  try {
    const res = await http.get('/sport/all');

    return res.data.sports;
  } catch (err) {
    throw err;
  }
});
