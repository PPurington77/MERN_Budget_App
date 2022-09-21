const express = require('express');
const { handleCreateExpense, handleGetAllExpenses, handleGetExpenseById, handleUpdateExpenseById, handleDeleteExpenseById, handleCreateBudget, handleGetAllBudgets, handleGetBudgetById, handleUpdateBudgetById, handleDeleteBudgetById, handleBudgetUpdateById } = require('../controllers/controller');
const router = express.Router();

//api/expenses will be added in server.js

//for expenses
router.post('/expenses/:id', handleCreateExpense);
router.get('/expenses/', handleGetAllExpenses);
router.get('/expenses/:id', handleGetExpenseById);
router.put('/expenses/:id', handleUpdateExpenseById);
router.delete('/expenses/:id', handleDeleteExpenseById);

//for budgets
router.post('/budgets', handleCreateBudget);
router.get('/budgets', handleGetAllBudgets);
router.get('/budgets/:id', handleGetBudgetById);
router.put('/budgets/:id', handleBudgetUpdateById);
router.delete('/budgets/:id', handleDeleteBudgetById);

module.exports = { projectRouter : router };