const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")

const addUser = async(req, res) => {
  let { FristName, email, password } = req.body;
  try {
    //
      password = await bcrypt.hash(password,10);
//تشفير الباسوورد مهم جدا للخصوصيه

      //
      const newUser = new userModel({ FristName, email, password });
      const response = await newUser.save();
      res.status(201).json(response);
  } catch (error) {
      res.send(error)
  }
};

module.exports = { addUser };