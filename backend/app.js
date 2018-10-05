var express = require('express');
var app = express();
var db = require('./db');

app.get('/', function(req, res, next) {
  db.pool.query('SELECT * FROM todos;', (err, results, fields)=>{
      if(err)
        return res.json(err)
      else
        return res.json({todos: results})
    })
})  

app.get('/sample', function(req, res, next) {
  res.json({ title: "aaa", name: "kkk"})
})

app.listen(3000);