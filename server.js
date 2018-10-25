const express = require('express');; 
const path = require('path')
const app = express()
const PORT = 5000


app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', "Origin X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/testing', (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json")
  res.json([ 
    {id: 1, customer: "Dumb Data"},
    {id: 2, customer: "Stupid Data"},
  ]);
}); 


app.listen(PORT, () => console.log('listening on 5000')); 