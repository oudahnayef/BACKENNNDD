
const taskModel = require("../../db/models/taskModle")


///////////////////////////////////
//gettask
const getTask = async (req,res) =>{
    const user = req.token.userId;
try{
 const taska = await taskModel.find({user:user})
res.status(200).json(taska)
}catch (error){
    res.send(error)
}
}


////////////////////////
//new func remove all task
const removeTasks = async (req,res) => {
    try{
    const allTask = await taskModel.find({}).remove({});
    res.status(200).json(allTask);
}catch (error) {
res.send(err);
}

}



///////////////////
//remove
const removeTask = async (req,res) =>{
    const user = req.token.userId;
    const id = req.params.id
    // console.log(id);
try{
    // const dell = await taskModel.find({});
    const tasks = await taskModel.findOneAndDelete({_id:id},{user:user});
     const dell = await taskModel.find({});
    res.status(200).json(dell);

}catch (err){
    res.send(err)
}

}
////////////////////////////////

//audate
const updateTask = async (req, res) => {
    const {id , name , task} = req.body;
    console.log(id , name , task);
    try {
        const update = await taskModel.findOneAndUpdate(
          { _id: id },
          {name:name,task:task},
        );
        const AuTask = await taskModel.find({}).populate("user");
        res.status(201).json(AuTask);
    } catch (error) {
      res.send(error);
    }
  };



///////////////
//push
const postTask= async (req,res)=>{
const { newName,newTask,newcomplete}=req.body;

const user= req.token.userId;
const newTas = new taskModel({
name : newName,
task:newTask,
complete:newcomplete,
user,
})
 try{
const taskMe = await newTas.save()
const taska = await taskModel.find({user:user}).populate("user");
res.status(200).json(taska)

 }catch (error) {
res.send(error)

 }
}





const completeTask = async (req , res)=>{
    const id = req.params.id;
    const {fenishTask} = req.body;

    console.log(fenishTask);
  try{
    const completeTa = await taskModel.findByIdAndUpdate({_id:id } , {complete: fenishTask } , {new: true})
    const compTask = await completeTa.save()
    const AuTask = await taskModel.find({})
    res.status(200).json(AuTask)
  
  }catch (err) {
    res.send("error")
  }
  }


  




module.exports = { getTask ,postTask,removeTask ,removeTasks,updateTask ,completeTask};
