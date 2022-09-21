const { createExpense, getAllExpenses, getExpenseById, updateExpenseById, deleteExpenseById, createBudget, getAllBudgets, getBudgetById, updateBudgetById, deleteBudgetById, budgetUpdateById } = require('../services/service');

const handleCreateExpense = async (req, res) => {
    console.log('controller: handleCreateExpense', req.body);

    try {
        const expense = await createExpense(req.params.id, req.body);
        return res.json(expense);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleCreateBudget = async (req, res) => {
    console.log('controller: handleCreateBudget', req.body);

    try {
        const budget = await createBudget(req.body);
        return res.json(budget);
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

const handleGetAllBudgets = async (req, res) => {
    try {
        const budgets = await getAllBudgets();
        return res.json(budgets);
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

const handleGetBudgetById = async (req, res) => {
    try {
        const budget = await getBudgetById(req.params.id);
        return res.json(budget);
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

const handleUpdateBudgetById = async (req, res) => {
    try {
        const budget = await updateBudgetById(req.params.id, req.body);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleBudgetUpdateById = async (req, res) => {
    try {
        const budget = await budgetUpdateById(req.params.id, req.body);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error)
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

const handleDeleteBudgetById = async (req, res) => {
    try {
        const budget = await deleteBudgetById(req.params.id);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

module.exports = { handleCreateExpense, handleGetAllExpenses, handleGetExpenseById, handleUpdateExpenseById, handleDeleteExpenseById, handleCreateBudget, handleGetAllBudgets, handleGetBudgetById, handleUpdateBudgetById, handleDeleteBudgetById, handleBudgetUpdateById };