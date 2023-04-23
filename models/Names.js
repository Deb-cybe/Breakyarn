const mongoose=require('mongoose');

const NamesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
});

const NamesModel=mongoose.model("names",NamesSchema);

module.exports=NamesModel;