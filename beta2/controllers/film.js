var Film = require('../models/film')

module.exports = {
  create : function(req,res) {
    console.log('data req : ',req.body);

    var result = {
      status : 'mati',
      success:false
    }

    var film = new Film({
      title : req.body.title,
      year : req.body.year
    })

    film.save(function (err) {
      if(err){
        result.msg = err;
      }else{
        result.msg = 'sukses!'
        result.status = 'nyala'
        result.success = true
      }
      res.json(result)
      // res.redirect('/films')
    })
  },

  read : function (req,res) {
    Film.find({},function (err,film) {
      if(err)res.json(err);
      res.render('film',{
        title : 'film',
        data : film
      })
      // res.json({
      //   data : film
      // });
    })
  },

  delete : function (req,res) {
    Film.findByIdAndRemove(req.params.id,function (err) {
      console.log('berhasil di delete!');

      if(err){
        res.json({
          msg : 'id ne gaono cuk'
        })
      }
      res.json({
        msg : 'deleted!'
      })
    })
  }
};
