var express = require('express')

var app = express()

// ROUTE
app.get('/hello',function(req,res) {
  res.send('hello!');
})

app.post('/kirim',function(req,res) {
  res.json({
    pesan : 'iki post!'
  });
  console.log('iki method post');
})

app.get('/user/:id',function (req,res) {
  console.log('request : '+req.params.id);
  res.json({
    pesan : "req : "+req.params.id
  });
})

app.get('/midware',function (req,res,next) {
  console.log('first');
  next()
},function (req,res,next) {
  console.log('second');
  res.json({
    msg : 'finish'
  })
})

app.listen('9000',function () {
  console.log('connected to port 9000');
})
