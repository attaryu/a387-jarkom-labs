'use strict'

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (_req, res) => {
    res.send('Hello world!\n');
});

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/
app.get('/me', (_req, res) => {
    res.send('<a href="https://www.dicoding.com/users/attaaar/academies" target="blank">attaaar</a>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);