const express = require('express');
const app = express(); 
const PORT = 5000


app.get('/testing', (req, res) => res.send('hello'))





app.listen(PORT, () => console.log('listening on 5000')); 