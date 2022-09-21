const express = require('express');
const cors = require('cors');
const port = 8000;
const { expenseRouter } = require('./routes/expense.routes');
const app = express();
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRouter);

app.listen(port, () => 
    console.log(`Listening on port ${ port }`)
);
