const School = require('./School')
const school = new School()

// register a listener for bellring event
school.on('bellRing', ({ period, next }) => {
  console.log(`Cring Cring ${period}-${next}`);
})

school.startPeriod();
