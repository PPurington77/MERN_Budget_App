
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const create = async (id, data) => {
  const res = await http.post(`/expenses/${id}`, data);
  return res.data;
};
export const createBudget = async (data) => {
  const res = await http.post('/budgets', data);
  return res.data;
};

export const getAll = async () => {
  const res = await http.get('/expenses');
  return res.data;
};
export const getAllBudgets = async () => {
  const res = await http.get('/budgets');
  return res.data;
};

export const getOneById = async (id) => {
  const res = await http.get(`/expenses/${id}`);
  return res.data;
};
export const getBudgetById = async (id) => {
  console.log('**********', id);
  const res = await http.get(`/budgets/${id}`);
  console.log(res.data, 'aaaaaaaaaaaaaaaaaaaa');
  console.log('0000000000000')
  return res.data;
};

export const deleteOneById = async (id) => {
  const res = await http.delete(`/expenses/${id}`);
  return res.data;
};
export const deleteBudgetById = async (id) => {
  const res = await http.delete(`/budgets/${id}`);
  return res.data;
};

export const updateBudgetById = async (id, data) => {
  const res = await http.put(`/budgets/${id}`, data);
  return res.data;
};
