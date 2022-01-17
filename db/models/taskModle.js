const mongoose = require("mongoose");


const taskModel = new mongoose.Schema({
    name: { type: String },
    task:  {type: String } ,
    complete : {type: Boolean , default:false},
    ///عشان نجيب اليوزر عن طريق البابيوليت الي سوا التاسك عن طريق الايدي
    user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
  });
  
  module.exports = mongoose.model("taskModel", taskModel);