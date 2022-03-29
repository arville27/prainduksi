const express = require('express');
const { PORT } = require('./config');

const app = express();

app.use(express.json());
app.use(express.static('src/static'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
