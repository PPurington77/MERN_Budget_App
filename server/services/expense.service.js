const { Expense } = require('../models/expense.model');

//CRUD
//CREATE
const createExpense = async (data) => {
    console.log('service: createExpense');

    const expense = await Expense.create(data);

    return expense;
};

//READ
//Read All
const getAllExpenses = async () => {
    const expenses = await Expense.find();

    return expenses;
};

//Read One
const getExpenseById = async (id) => {
    const expense = await Expense.findById(id);

    return expense;
};

//UPDATE
const updateExpenseById = async (id, data) => {
    const expense = await Expense.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return expense;
};

//DELETE
const deleteExpenseById = async (id) => {
    const expense = await Expense.findByIdAndDelete(id);

    return expense;
};

module.exports = { createExpense, getAllExpenses, getExpenseById, updateExpenseById, deleteExpenseById };