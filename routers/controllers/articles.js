const articlesModel = require("../../db/models/articlesModel");
const addArtical = require("../../db/models/articlesModel");

const getarticles = async (req, res) => {
  try {
    const userArti = await addArtical.find({});
    res.status(200).json(userArti);
  } catch (error) {
    res.send(error);
  }
};

const postArticles = async (req, res) => {
  const { article , name } = req.body;
  const user = req.token.userId;
  
  try {
   
      const newAdd = new addArtical ({article , name ,user})
      const saveAdd = await newAdd.save();
      const allData =  await addArtical.find({});
      res.status(200).json(allData);
   
  } catch (error) {
    res.send(error);
  }
};




const deletedArt = async (req,res) =>{
   const name = req.token;
  const article =req.token;
  const id = req.params.id;
try{
  const Artec = await articlesModel.findOneAndDelete({_id:id});
   const dell = await articlesModel.find({});
  res.status(200).json(dell);

}catch (err){
  res.send(err)
}

}

module.exports = { postArticles, getarticles ,deletedArt};