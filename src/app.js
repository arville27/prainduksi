const express = require('express');
const session = require('express-session');
const { PORT, SESSION_SECRET } = require('./config');

const app = express();
app.use(require('./middlerware/logger'));
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/Assets', require('./routes/assets'));
app.use(express.static('src/static'));

const port = PORT ?? 3500;

app.listen(port, () => console.log(`Server listening on port ${port}`));
