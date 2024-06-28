const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useRouter = require('./routes/userRoute')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", useRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


app.use((req, res, next) => {
  res.status(404).json({
    message: '404.....bad request url'
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something broke'
  })
})

module.exports = app;

