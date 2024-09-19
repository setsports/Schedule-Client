import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../http/http';

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

export const setWeek = createAsyncThunk('/week/set', async (payload) => {
  const { start, end } = payload;

  try {
    await http.post('/week/set', { start, end });

    window.location.reload();
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const getWeek = createAsyncThunk('/week/get', async () => {
  try {
    const res = await http.get('/week/get');

    return res.data.week;
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});
