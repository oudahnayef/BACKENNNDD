const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  FristName: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  Admin: {type:Boolean, default:false},
});

module.exports = mongoose.model("userModel", userModel);