const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Schema........
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model......
const Product = mongoose.model("Product", productSchema);

const dbConnection = async () => {

  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/ProductDB`)
    console.log(`DB is connected`);
  } catch (error) {
    console.log(`DB is not connected`);
    console.log(error);
    process.exit(1)
  }
}

app.get("/", (req, res) => {
  res.send(`Welcome to Server is Listening...`);
})

app.post("/reg", async (req, res) => {

  try {

    const { title, price, description } = req.body

    const newProduct = new Product({
      title: title,
      price: price,
      description: description,
    })

    await newProduct.save();
    res.send(newProduct)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.listen(PORT, async () => {
  console.log(`server is listening at http://localhost:${PORT}`);
  await dbConnection();
})


