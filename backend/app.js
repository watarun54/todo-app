var express = require('express');
var app = express();
var db = require('./db');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  db.pool.query('SELECT * FROM todos;', (err, results, fields)=>{
      if(err)
        return res.json(err)
      else
        return res.json({todos: results})
    })
})  

app.get('/sample', function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({"todos":[{"id":1,"title":"aaa","done":0,"created_at":"2018-10-04T12:42:45.000Z","updated_at":"2018-10-04T12:42:45.000Z"},{"id":2,"title":"buy onion","done":0,"created_at":"2018-10-04T12:43:45.000Z","updated_at":"2018-10-04T12:43:45.000Z"},{"id":3,"title":"study English","done":0,"created_at":"2018-10-04T12:45:51.000Z","updated_at":"2018-10-04T12:45:51.000Z"}]})
})

app.listen(3000);