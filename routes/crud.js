const express = require("express");
const mongoose = require("mongoose");
const app = express();

const router = express.Router();

/********************************************************************CRUD OPERATION **********************************************************/

/*
Create Data(User)

*/

router.post("/", (req, res) => {
  console.log(req.body);
  return res.json({ msg: "creates new data" });
});

/*
Read Data(User)

*/

router.get("/", (req, res) => {
  console.log(req.body);
  return res.json({ msg: "fetch data" });
});

/*
Update Data(User)

*/

router.put("/", (req, res) => {
  console.log(req.body);
  return res.json({ msg: "updates data" });
});

/*
Delete Data(User)

*/

router.delete("/", (req, res) => {
  console.log(req.body);
  return res.json({ msg: "updates data" });
});

module.exports = router;
