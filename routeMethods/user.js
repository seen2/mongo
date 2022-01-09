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
  let users = [];

  try {
    console.log(req.body);
    const { userId, age, name } = req.body;
    users = userId ? [await User.findById(userId)] : [...users];
    users = age
      ? [...users, ...(await User.where("age").equals(age))]
      : [...users];
    users = name ? [...users, ...(await User.getAllByName(name))] : [...users];
    console.log("----------");
    // console.log(await User.getAllByName(name));
    // users =
    //   email && name
    //     ? [...users, await User.findOne({ name, email }).namedEmail]
    //     : users;
    const user = await User.findOne({ name });
    console.log(user.namedEmail);
  } catch (error) {
    users = error.message;
  } finally {
    return { users };
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
