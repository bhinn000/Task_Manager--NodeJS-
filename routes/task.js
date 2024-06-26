const express= require('express')
const router=express.Router()
const { getAllTasks ,getTask,createTask,updateTask,deleteTask}=require('../controllers/tasks')

// router.route('/').get((req, res)=>{
//     res.send('all items')
// })
// doing above get((req, res)=>{
//     res.send('all items')
// }) as below
router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router


