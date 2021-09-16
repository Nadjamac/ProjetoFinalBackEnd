
const mongoose= require('mongoose');

const routineModel= new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    priority:{type:String,required:true },
    status:{type:String, required:true},
    term:{type:String,required:true} ,
    dateCreate:{type:Date,default:Date.now}
});

const Routine =mongoose.model("routines",routineModel);

module.exports= Routine;  