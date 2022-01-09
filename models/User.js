const mongoose = require("mongoose");
import { mongoose as m } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export default m.model("user", UserSchema);
