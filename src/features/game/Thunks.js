import http from '../../http/http';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const uploadGames = createAsyncThunk('game/upload', async (payload) => {
  const { data, dispatch } = payload;

  try {
    const res = await http.post('/game/upload', data);

    const payload = {
      type: 'success',
      messageTxt: 'Successfully uploaded games',
    };
    dispatch(addMessage(payload));

    setTimeout(() => {
      dispatch(clearMessages());
      window.location.reload();
    }, 500);
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const uploadAppGames = createAsyncThunk(
  '/game/upload/app',
  async (payload) => {
    const { data, dispatch } = payload;

    try {
      const res = await http.post('/game/upload/app', data);

      console.log(res);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully uploaded games',
      };
      dispatch(addMessage(payload));

      // setTimeout(() => {
      //   dispatch(clearMessages());
      //   window.location.reload();
      // }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);
