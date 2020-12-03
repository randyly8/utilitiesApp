const express = require('express');

const app = express();

/// change this
app.get('/', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Jane', lastName: 'Smith'},
        {id: 3, firstName: 'Kira', lastName: 'Light'}
    ];

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));