const Task=require('../models/Tasks')

const getAllTasks=async (req,res)=>{
    // res.send('Get all tasks !')
    try{
        const task=await Task.find({})
        res.status(200).json({ task })
    }catch(error){
        res.status(500).json({msg:error})
    }       
}

const createTask=async (req,res)=>{
    // res.send('Create a task')
    // res.json(req.body)//bring from the body of the post method in postman
    try{
        const task=await Task.create(req.body)
        res.status(201).json({ task })

    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getTask=async (req,res)=>{
    // res.send('Get a task')
    // res.json({am_id:req.params.id})
    // const {id:taskID}=req.params
    try{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask=async (req,res)=>{
    res.send('Update a task')
    try{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID} , req.body , {
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({id:taskID , data : req.body})
        
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask=async (req,res)=>{
    
    try{
        const {id:taskID} = req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.send('Delete a task')
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
module.exports={
    getAllTasks, 
    getTask,
    createTask,
    updateTask,
    deleteTask
}
