const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log(...process.argv);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`));
