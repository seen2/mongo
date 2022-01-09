/********************************************************************CRUD OPERATION **********************************************************/

const express = require("express");
const {
  saveUser,
  fetchUser,
  updateUser,
  deleteUser,
} = require("../routeMethods/user");

const router = express.Router();

/*
Create Data(User)

*/

router.post("/", (req, res) => {
  console.log(req.body);
  try {
    saveUser(req)
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return res.json({ result: error.message });
  }
});

/*
Read Data(User)

*/

router.get("/", (req, res) => {
  try {
    fetchUser(req)
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return res.json({ result: error.message });
  }
});

/*
Update Data(User)

*/

router.put("/", (req, res) => {
  console.log(req.body);
  try {
    updateUser(req)
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return res.json({ result: error.message });
  }
});

/*
Delete Data(User)

*/

router.delete("/", (req, res) => {
  console.log(req.body);
  try {
    deleteUser(req)
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return res.json({ result: error.message });
  }
});

module.exports = router;
