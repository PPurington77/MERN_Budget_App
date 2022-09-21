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
            required: false
        },

        cost: {
            type: Number,
            required: false
        }
    },
    {timestamps: true}
);

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense : Expense };