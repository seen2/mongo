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
  bestFreind: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  hobbies: [String],
});

UserSchema.methods.sayName = function () {
  return `${this.name}`;
};

UserSchema.statics.getAllByName = function (name) {
  return this.where("name").equals(name);
};

UserSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

//middleware
UserSchema.pre("save", function (next) {
  this.createdDate = Date.now();
  next();
});
// UserSchema.post('')

module.exports = mongoose.model("users", UserSchema);
