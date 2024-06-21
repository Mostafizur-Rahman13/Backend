const eventEmitter = require('events');

class School extends eventEmitter {

  startPeriod() {
    console.log('Class Started');

    // raise an Event
    setTimeout(() => {
      this.emit('bellRing', {
        period: '2nd period ended ring',
        next: 'next ICT class'
      });
    }, 2000);
  }
}

module.exports = School;


