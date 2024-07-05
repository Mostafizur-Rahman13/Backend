const express = require('express');
const app = express();
const cors = require('cors');
const useRouter = require('./routes/userRoute')
const dbconnect = require("./confiq/db.connect")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dbconnect()

app.use("/api/user", useRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./view/index.html")
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

