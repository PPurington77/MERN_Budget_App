const express = require('express');
const { handleCreateExpense, handleGetAllExpenses, handleGetExpenseById, handleUpdateExpenseById, handleDeleteExpenseById } = require('../controllers/expense.controller');
const router = express.Router();

//api/expenses will be added in server.js

router.post('/', handleCreateExpense);
router.get('/', handleGetAllExpenses);
router.get('/:id', handleGetExpenseById);
router.put('/:id', handleUpdateExpenseById);
router.delete('/:id', handleDeleteExpenseById);

module.exports = { expenseRouter : router };