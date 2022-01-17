const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    if (user) {
      const see = await bcrypt.compare(password, user.password);
      if (see === true) {
        // و البايلود عباره اوبجيكت يحتوي على يوزر ويوزرنيم
        //وقدر اضيف عليه كي جديد
        const payload = { userId: user._id, userName: user.name ,Admin:user.Admin};
        // جبناه هنا وشفرناه عن طريق الساين ميثود
        const token = jwt.sign(payload, "ABC");
        // وهنا حطينا التوكين
        res.status(200).json({ token ,payload});
    

        console.log(email);
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };