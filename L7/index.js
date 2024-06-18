const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`)
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`)

// readStrime.on('data', (chunk) => {
//   writeStream.write(chunk.toString());
// })

readStream.pipe(writeStream)
