const eventEmitter = require('events');
const emitter = new eventEmitter();

// register a listener for bellring event
emitter.on('bellRing', ({ period, next }) => {
  console.log(`Cring Cring ${period}-${next}`);
})

// raise an Event
setTimeout(() => {
  emitter.emit('bellRing', {
    period: '2nd period ended ring',
    next: 'next ICT class'
  })
}, 2000); 
