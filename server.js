const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

//using config for securing in default.json
const mongoURI = config.get("mongoURI");
const mongoLocalURI = config.get("mongoLocalURI");
//Schema
const User = require("./models/User");
//routes
const crud = require("./routes/crud");

//Middleware
// deprecated
// app.use(bodyParser.json()); //---> deprecated
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

//defining api paths for different routes
app.use("/api/crud", crud);

//DB connection
console.log("Mongo uri:" + mongoLocalURI);
mongoose
  .connect(mongoLocalURI, {})
  .then(() => console.log("mongoDB connected!!!"))
  .catch((err) => console.log("error:---------->" + err.message));

// sever start
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on: " + port));

app.get("/", (req, res) => res.json({ msg: "Hello World!" }));
