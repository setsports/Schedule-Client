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

export const createUser = createAsyncThunk('/user/create', async (payload) => {
  const { data, dispatch } = payload;

  try {
    await http.post('/user/create', data);

    const payload = {
      type: 'success',
      messageTxt: 'Successfully created an account',
    };
    dispatch(addMessage(payload));

    setTimeout(() => {
      dispatch(clearMessages());
      window.location.href = '/admin/dashboard/users';
    }, 500);
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const modifyUser = createAsyncThunk('/user/modify', async (payload) => {
  const { data, dispatch } = payload;

  try {
    await http.put(`/user/modify`, data);

    const payload = {
      type: 'success',
      messageTxt: 'Successfully modified changes',
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

export const modifySingleUser = createAsyncThunk(
  '/user/modify/:id',
  async (payload) => {
    const { id, data, dispatch } = payload;

    try {
      await http.put(`/user/modify/${id}`, data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified changes',
      };
      dispatch(addMessage(payload));
      setTimeout(() => {
        dispatch(clearMessages());
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteUser = createAsyncThunk('/user/delete', async (payload) => {
  const { id, dispatch } = payload;

  try {
    await http.delete(`/user/delete/${id}`);

    const payload = {
      type: 'success',
      messageTxt: 'Successfully deleted user',
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

export const authUser = createAsyncThunk('/user/auth', async (payload) => {
  const { data, dispatch } = payload;

  try {
    await http.post('/user/auth', data);

    const payload = {
      type: 'success',
      messageTxt: 'Successfully logged in',
    };
    dispatch(addMessage(payload));

    setTimeout(() => {
      dispatch(clearMessages());
      window.location.href = '/admin/dashboard';
    }, 500);
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const getUser = createAsyncThunk('/user/me', async () => {
  try {
    const res = await http.get('/user/me');

    return res.data;
  } catch (err) {
    throw err;
  }
});

export const checkAuth = createAsyncThunk(
  '/user/check-auth',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await http.get('/user/check-auth');

      return res.data ? fulfillWithValue() : rejectWithValue();
    } catch (err) {
      throw err;
    }
  }
);

export const logoutUser = createAsyncThunk('/user/logout', async () => {
  try {
    await http.post('/user/logout');
  } catch (err) {
    throw err;
  }
});

export const getUsers = createAsyncThunk('/user/all', async () => {
  try {
    const res = await http.get('/user/all');

    return res.data.users;
  } catch (err) {
    throw err;
  }
});
