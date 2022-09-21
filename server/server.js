const express = require('express');
const cors = require('cors');
const port = 8000;
const { projectRouter } = require('./routes/routes');

const app = express();
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use('/api', projectRouter);

app.listen(port, () => 
    console.log(`Listening on port ${ port }`)
);

//hello
