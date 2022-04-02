const express = require('express');
const session = require('express-session');
const { PORT, SESSION_SECRET } = require('./config');

const app = express();
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.json());
app.use(express.static('src/static'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/info', require('./routes/info'));

const port = PORT ?? 3500;

console.log('Printing');
app.listen(port, () => console.log(`Server listening on port ${port}`));
