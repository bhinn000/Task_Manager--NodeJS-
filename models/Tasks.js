const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "must have a name"],
        trim:true,
        maxlength:[20,"name can't exceed more than 10"],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports=mongoose.model('Tasks' , TaskSchema)

