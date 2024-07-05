require('dotenv').config();
const mongoose = require("mongoose")
const db_url = process.env.DB_URL

function dbconnect() {
  mongoose.connect(db_url).then(() => console.log(`db is connect`)).catch((e) => console.log(`db error ${e.message}`))
}

module.exports = dbconnect;
