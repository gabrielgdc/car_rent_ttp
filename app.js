const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Application successfully started at port: ${port}`)
});

module.exports = app;