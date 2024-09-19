import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URI,
});

export default http;
