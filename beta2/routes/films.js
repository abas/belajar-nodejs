var express = require('express')
var filmController = require('../controllers/film')
var router = express.Router()

router.post('/',filmController.create)
router.get('/',filmController.read)
router.delete('/delete',filmController.delete)

// DELETE
// router.delete('/:id',function (req,res) {
//   console.log('aku mau delete : '+req.params.id);
//   Film.findByIdAndRemove(req.params.id,function (err) {
//     if(err){
//       res.json({
//         msg : 'id ne gaono cuk'
//       })
//     }
//     res.json({
//       msg : 'deleted!'
//     })
//   })
// })

// READ
// router.get('/query',function (req,res) {
//   Film.find({},function (err,film) {
//     if(err)res.json(err);
//     res.json({
//       data : film
//     });
//   })
// })

// PUT
// router.get('/edit/:id',function (req,res) {
//   var id = req.params.id;
//   console.log('data req : ',id);
//   Film.find({
//     id:'id'
//   })
//
//   res.render('edit',{
//     title : req..title,
//     year : "film.year"
//   })
//
//   var result = {}
//
//   var film = new Film({
//     title : res.body.title,
//     year : res.body.year
//   })
//   film.save(function (err) {
//     if(err){
//       result.msg = err;
//     }else{
//       result.msg = 'sukses!'
//     }
//   //   res.json(result)
//     res.redirect('/films')
//   })
// })

// CREATE

// router.post('/',function (req,res) {
//   console.log('data req : ',req.body);
//
//   var result = {}
//   var film = new Film({
//     title : req.body.title,
//     year : req.body.year
//   })
//
//   film.save(function (err) {
//     if(err){
//       result.msg = err;
//     }else{
//       result.msg = 'sukses!'
//     }
//     // res.json(result)
//     res.redirect('/films')
//   })
// })


module.exports = router
