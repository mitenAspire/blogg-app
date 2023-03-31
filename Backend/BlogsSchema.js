const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userId: ObjectId,
  id: Number,
  image: String,
});
module.exports = mongoose.model("blogs", userSchema);
