var chai = require('chai')
var should = chai.should()

var fB = require('../helpers/fizzbuzz')

describe('FizzBuzz test',function () {
  it('jika angka kelipatan 3, cetak Fizz ',function () {
    fB.fizzBuzz(3).should.equal("Fizz")
  })

  it('jika angka !kelipatan 3, !cetak Fizz ',function () {
    fB.fizzBuzz(4).should.not.equal("Fizz")
  })

  it('jika angka kelipatan 3x5, cetak Buzz',function () {
    fB.fizzBuzz(15).should.not.equal("Buzz")
  })
})
