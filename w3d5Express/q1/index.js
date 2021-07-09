const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const {name, age} = req.query;
    const response = `Welcome ${name ? name : "person"}. ${age ? `You are ${age} years old!` : ""}`;
    res.send(response);
});
app.listen(3000);