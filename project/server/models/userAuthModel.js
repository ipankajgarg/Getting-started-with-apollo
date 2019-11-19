const mongoose = require("mongoose");
//Pulling out Schema from mongoose
const { Schema } = mongoose;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    validate: [validateEmail, "Please try a valid email address"]
  },
  password: { type: String, required: true }
});

const Model = mongoose.model("users", userSchema);

module.exports = Model;
