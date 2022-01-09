/********************************************************************MONGOOSE SCHEMA **********************************************************/

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, lowercase: true, minlength: 7 },
  address: { street: String, city: String },
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      //validate WORKS ONLY WITH CREATE AND SAVE METHODES
      validator: (data) => {
        return data % 2 == 0;
      },
      message: (param) => `${param.value} is not Even`,
    },
  },
  createdDate: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
    required: true,
  },
  updatedDate: Date,
  bestFreind: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
});

module.exports = mongoose.model("user", UserSchema);
