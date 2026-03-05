const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGO_URL)   // 👈 YAHI CHANGE HAI
    .then(() => {
      console.log("MongoDB Connected ");
    })
    .catch((err) => {
      console.log("DB Error:", err);
    });
}

module.exports = connectDB;