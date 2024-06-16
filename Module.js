const fs = require('fs');

fs.readFile('my file.txt', (err, data) => {
  console.log(data.toString());
})