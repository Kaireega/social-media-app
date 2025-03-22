import API from './api';
import * as SecureStore from 'expo-secure-store';

// User login
export const loginUser = async (username, password) => {
  const res = await API.post('/token/', { username, password });
  await SecureStore.setItemAsync('token', res.data.access);
  return res;
};

// User registration
export const registerUser = async (username, email, password) => {
  const res = await API.post('/register/', { username, email, password });
  return res;
};

// Logout (delete token)
export const logoutUser = async () => {
  await SecureStore.deleteItemAsync('token');
};
