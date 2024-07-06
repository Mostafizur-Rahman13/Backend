const express = require('express');
const multer = require('multer');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 4000;



const connectDB = async () => {

  try {
    await mongoose.connect("mongodb+srv://mrtdeveloper34:uCBqUEEgwEvBRo0E@cluster.unlsovf.mongodb.net/dbconnect");
    console.log(`DB is connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'user name is required']
  },
  image: {
    type: String,
    require: [true, 'user image is required']
  }
})

const User = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.status(201).send(`Server is listening....`)
})

app.get("/register", (req, res) => {
  res.status(201).sendFile(__dirname + '/index.html');
})

app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename
    })
    await newUser.save()
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

app.listen(PORT, async () => {
  console.log(`Server is listening http://localhost:${PORT}`);
  await connectDB();
})