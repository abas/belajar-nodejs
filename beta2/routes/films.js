var express = require('express')

var Film = require('../models/film')

var router = express.Router()

// DELETE
router.delete('/:id',function (req,res) {
  console.log('aku mau delete : '+req.params.id);
  Film.findByIdAndRemove(req.params.id,function (err) {
    if(err){
      res.json({
        msg : 'id ne gaono cuk'
      })
    }
    res.json({
      msg : 'deleted!'
    })
  })
})

// READ
router.get('/',function (req,res) {
  Film.find({},function (err,film) {
    if(err)res.json(err);
    res.json(film);
  })
})

// CREATE
router.post('/',function (req,res) {
  console.log('data req : ',req.body);

  var result = {}
  var film = new Film({
    title : req.body.title,
    year : req.body.year
  })

  film.save(function (err) {
    if(err){
      result.msg = err;
    }else{
      result.msg = 'sukses!'
    }
    res.json(result)
  })
})

module.exports = router
