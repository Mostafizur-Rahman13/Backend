const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);

const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/ProductDB`)
    console.log(`Database is connected`);
  } catch (error) {
    console.log(`Database is not connected`);
    console.log(error);
    process.exit(1)
  }
}

app.get("/", (req, res) => {
  res.send(`Welcome to Server is Listening...`);
});

app.get("/product", async (req, res) => {

  try {
    const product = await Product.find().limit(2);
    if (product) {
      res.status(201).send(product);
    } else {
      res.status(404).send({ message: "Product is not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/products", async (req, res) => {

  let Products

  try {
    const price = req.query.price
    if (price) {
      Products = await Product.find({ price: { $gt: price } });
    } else {
      Products = await Product.find();
    }

    if (Products) {
      succefull: true,
        res.status(201).send(Products);
    } else {
      res.status(500).send({
        succefull: false,
        message: "Product not found",
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})



app.post("/products", async (req, res) => {
  try {
    const { title, price, description } = req.body
    const newProduct = new Product({
      title: title,
      price: price,
      description: description,
    })

    await newProduct.save();
    res.status(201).send(newProduct)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});



app.get("/products/:id", async (req, res) => {

  const product = await Product.findOne({ _id: req.params.id }, { title: 1, _id: 0 });

  try {
    if (product) {
      res.status(201).send({
        succefull: true,
        message: `Return Single Product`,
        data: product
      })
    } else {
      res.status(500).send({
        succefull: false,
        message: "Product not found"
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});


app.listen(PORT, async () => {
  console.log(`server is listening at http://localhost:${PORT}`);
  await dbConnection();
})


