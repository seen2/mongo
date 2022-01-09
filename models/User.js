const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  age: Number,
});

module.exports = mongoose.model("user", UserSchema);
