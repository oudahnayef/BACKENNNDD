const mongoose = require("mongoose");
console.log(process.env.DB_URL,"data")
mongoose.connect(process.env.DB_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);

