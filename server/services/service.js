const { Expense } = require('../models/expense.model');
const { Budget } = require('../models/budget.model');

//CRUD
//CREATE

const createExpense = async (budgetId, data) => {
    const expense = await Expense.create(data);
    const budget = await updateBudgetById(budgetId, expense);
    return expense;
}

const createBudget = async (data) => {
    console.log('service: createBudget');

    const budget = await Budget.create(data);

    return budget;
};

//READ
//Read All
const getAllExpenses = async () => {
    const expenses = await Expense.find();

    return expenses;
};

const getAllBudgets = async () => {
    const budgets = await Budget.find();

    return budgets;
};

//Read One
const getExpenseById = async (id) => {
    const expense = await Expense.findById(id);

    return expense;
};

//Read One
const getBudgetById = async (id) => {
    const budget = await Budget.findById(id);

    return budget;
};

//UPDATE
const updateExpenseById = async (id, data) => {
    const expense = await Expense.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return expense;
};

//for creating an expense and pushing it to the budget expense array
const updateBudgetById = async (id, data) => {
    const budget = await Budget.findByIdAndUpdate(id, 
        { $push: {expense: data }},
        { new: true, useFindAndModify: false}
        );

    return budget;
};

//for updating anything in the budget except expenses
const budgetUpdateById = async (id, data) => {
    const budget = await Budget.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return budget;
}

//DELETE
const deleteExpenseById = async (id) => {
    const expense = await Expense.findByIdAndDelete(id);

    return expense;
};

const deleteBudgetById = async (id) => {
    const budget = await Budget.findByIdAndDelete(id);

    return budget;
};

module.exports = { createExpense, getAllExpenses, getExpenseById, updateExpenseById, deleteExpenseById, createBudget, getAllBudgets, getBudgetById, updateBudgetById, deleteBudgetById, budgetUpdateById };