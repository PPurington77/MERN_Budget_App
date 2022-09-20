const mongoose = require('mongoose');
//name, category, price
const ExpenseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Expense name is required'],
            minLenght: [3, 'Must be at least 3 characters long']
        },

        category: {
            type: String,
            required: [true, 'Category is required']
        },

        cost: {
            type: Number,
            required: [true, 'Cost is required']
        }
    },
    {timestamps: true}
);

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense : Expense };