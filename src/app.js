const express = require('express');
const session = require('express-session');
const { Client } = require('@line/bot-sdk');
const { PORT, SESSION_SECRET, LINE_MESSAGING_API } = require('./config');

const app = express();
const client = new Client(LINE_MESSAGING_API);
require('./handler')(client);

module.exports = client;

app.use(require('./middlerware/logger'));
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use('/line', require('./routes/line'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/event', require('./routes/event'));
app.use('/api/auth', require('./routes/auth'));
app.use('/health', require('./routes/health'));
app.use('/Assets', require('./routes/assets'));
app.use(express.static('src/static'));

const port = PORT ?? 3500;

app.listen(port, () => console.log(`Server listening on port ${port}`));
