
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const create = async (data) => {
  const res = await http.post('/expenses', data);
  return res.data;
};

export const getAll = async () => {
  const res = await http.get('/expenses');
  return res.data;
};

export const getOneById = async (id) => {
  const res = await http.get(`/expenses/${id}`);
  return res.data;
};

export const deleteOneById = async (id) => {
  const res = await http.delete(`/expenses/${id}`);
  return res.data;
};

export const updateOneById = async (id, data) => {
  const res = await http.put(`/expenses/${id}`, data);
  return res.data;
};
