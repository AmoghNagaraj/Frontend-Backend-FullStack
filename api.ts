import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',  
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (data: any) => {
  const response = await api.post('/users', data);
  return response.data;
};
