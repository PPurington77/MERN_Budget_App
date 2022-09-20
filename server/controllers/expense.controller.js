const { createExpense, getAllExpenses, getExpenseById, updateExpenseById, deleteExpenseById } = require('../services/expense.service');

const handleCreateExpense = async (req, res) => {
    console.log('controller: handleCreateExpense', req.body);

    try {
        const expense = await createExpense(req.body);
        return res.json(expense);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleGetAllExpenses = async (req, res) => {
    try {
        const expenses = await getAllExpenses();
        return res.json(expenses);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetExpenseById = async (req, res) => {
    try {
        const expense = await getExpenseById(req.params.id);
        return res.json(expense);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleUpdateExpenseById = async (req, res) => {
    try {
        const expense = await updateExpenseById(req.params.id, req.body);
        return res.json(expense);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleDeleteExpenseById = async (req, res) => {
    try {
        const expense = await deleteExpenseById(req.params.id);
        return res.json(expense);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

module.exports = { handleCreateExpense, handleGetAllExpenses, handleGetExpenseById, handleUpdateExpenseById, handleDeleteExpenseById };