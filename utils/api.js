import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

// Automatically add token to headers if available
API.interceptors.request.use(async (req) => {
  const token = await SecureStore.getItemAsync('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
