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

export const createCountry = createAsyncThunk(
  'country/create',
  async (payload) => {
    const { data, dispatch } = payload;

    try {
      await http.post('/country/create', data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully created a country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const createAppCountry = createAsyncThunk(
  'country/create',
  async (payload) => {
    const { data, dispatch } = payload;

    try {
      await http.post('/country/create/app', data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully created a country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries/app';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const modifyCountry = createAsyncThunk(
  'country/modify',
  async (payload) => {
    const { id, data, dispatch } = payload;

    try {
      await http.put(`/country/modify/${id}`, data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified a country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const modifyAppCountry = createAsyncThunk(
  'country/modify/app',
  async (payload) => {
    const { id, data, dispatch } = payload;

    try {
      await http.put(`/country/modify/app/${id}`, data);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully modified an app country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries/app';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const getCountries = createAsyncThunk('country/all', async (payload) => {
  const { language, dispatch } = payload;

  try {
    const res = await http.post('/country/all', { language });

    return res.data.countries;
  } catch (err) {
    setupMessage('danger', err.response.data.message, dispatch);
  }
});

export const getAppCountries = createAsyncThunk(
  'country/app',
  async (payload) => {
    const { dispatch } = payload;

    try {
      const res = await http.get('/country/app');

      return res.data.countries;
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const getClientCountries = createAsyncThunk(
  'country/client',
  async (payload) => {
    const { language, dispatch } = payload;

    try {
      const res = await http.post('/country/client', { language });

      return res.data.countries;
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteCountry = createAsyncThunk(
  'country/delete',
  async (payload) => {
    const { id, dispatch } = payload;

    try {
      await http.delete(`/country/delete/${id}`);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully deleted a country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);

export const deleteAppCountry = createAsyncThunk(
  'country/delete/app',
  async (payload) => {
    const { id, dispatch } = payload;

    try {
      await http.delete(`/country/delete/app/${id}`);

      const payload = {
        type: 'success',
        messageTxt: 'Successfully deleted an app country',
      };
      dispatch(addMessage(payload));

      setTimeout(() => {
        dispatch(clearMessages());
        window.location.href = '/admin/dashboard/countries/app';
      }, 500);
    } catch (err) {
      setupMessage('danger', err.response.data.message, dispatch);
    }
  }
);
