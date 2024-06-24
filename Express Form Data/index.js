const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/user", (req, res) => {
  // const fname = req.body.fname
  // const lname = req.body.lname
  const { fname, lname, sID } = req.body
  res.send(`Welcome to ${fname}${lname} . Your student id ${sID}`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})