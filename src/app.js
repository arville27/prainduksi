const express = require('express');
const { PORT } = require('./config');

const app = express();

app.use(express.json());
app.use(express.static('src/static'));
app.use('/api/auth', require('./routes/auth'));

const port = PORT ?? 3500;

console.log('Printing');
app.listen(port, () => console.log(`Server listening on port ${port}`));
