const userModel = require("../../db/models/userModel");
//
const userProfile = async (req, res) => {
    const userId = req.token.userId;
try {
    const user = await userModel.findOne({ _id: userId });
    res.status(200).json(user);
} catch (error) {
    res.send(error)
}
};
//
const deleteUser= async(req,res)=>{
    const userId = req.token.userId;
    const id=req.params.id;
try {
    const userAdmin = await userModel.findOne({ _id: userId });
    if (userAdmin.Admin == true) {
    const user = await userModel.findOneAndDelete({ _id: id });
    res.status(200).json(user);
    }
} catch (error) {
    res.send(error,"error")
}

}

const getUsers=async(req,res)=>{
    // const userId = req.token.userId;
    try {
        const users = await userModel.find({ });
        res.status(200).json(users);
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    userProfile,deleteUser,getUsers
};