var events = require('events');
var eventEmitter = new events.EventEmitter();

var EventHandler = function() {
  console.log('i hear a Scream!');
}

eventEmitter.on('scream',EventHandler);
eventEmitter.emit('hai');

// try this
var evSum = new events.EventEmitter();

function sum(a,b) {
  return a+b;
}

var a =10;
var b = 5;
var temp = sum(a,b);

var showEvent = function() {
  console.log(temp);
}

evSum.on(sum(a,b),showEvent);
evSum.emit(sum(a,b));
