const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  viewed: { type: Number, default: 0 }
});

module.exports = mongoose.model("posts", postSchema);
