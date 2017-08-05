var chai = require('chai')
var chaiHttp = require('chai-http')
var should = chai.should()

chai.use(chaiHttp)

var app = require('../app')

describe('Film API',function () {
  it('judul berubah ketika berhasil diubah',function (done) {
    // create
    chai.request(app).post('/film').send({
      title : 'ulala',
      year : 2009
    }).end(function (err,res) {
      if(err)console.log('error : ',err);
      res.should.be.json
      res.body.should.have.property('success')
      res.body.status.should.be.equal('nyala')
      res.body.success.should.be.equal(true)
      // console.log("res : "+res);
      done()
    })

    // update

    // delete

  })
})
