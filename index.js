// common js module import syntax - nodeJS does not have support for ES2015 modules yet
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);