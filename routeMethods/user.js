/********************************************************************CRUD OPERATION **********************************************************/

const User = require("../models/User");

const saveUser = async (req) => {
  let msg;

  try {
    console.log(req.body);
    const userData = req.body;
    const user = await User.create({
      ...userData,
      createdDate: new Date(req.body.createdDate),
      updatedDate: new Date(req.body.updatedDate),
    });
    user.save();
    msg = "User Created";
  } catch (error) {
    msg = error.message;
  } finally {
    return { msg };
  }
};

const fetchUser = async (req) => {
  let msg;

  try {
    console.log(req.body);
    const { name, email, address } = req.body;
    console.log(name, email, address);
    msg = "User Fetched";
  } catch (error) {
    msg = error.message;
  } finally {
    return { msg };
  }
};

const updateUser = async (req) => {
  let msg;

  try {
    console.log(req.body);
    const { name, email, address } = req.body;
    console.log(name, email, address);
    msg = "User Updated";
  } catch (error) {
    msg = error.message;
  } finally {
    return { msg };
  }
};

const deleteUser = async (req) => {
  let msg;

  try {
    console.log(req.body);
    const { name, email, address } = req.body;
    console.log(name, email, address);
    msg = "User Deleted";
  } catch (error) {
    msg = error.message;
  } finally {
    return { msg };
  }
};

module.exports = { saveUser, fetchUser, updateUser, deleteUser };
