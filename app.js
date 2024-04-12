const connectDB=require('./db/connect')
const express=require('express')
const app=express()
const tasks=require('./routes/task') //thats the location 
require('dotenv').config()//The line require('dotenv').config() is typically used in Node.js applications to load environment variables from a file called .env into the process's environment.
const port=3500 

//middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks' , tasks)

//routes
// app.get('/hello' , (req , res)=>{
//     res.send("Task Manager App")
// })

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running through this port...' ${port}`))
    }
    catch(error){
        console.log(error)
    }
}
start()

//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id')
//app.patch('/api/v1/tasks/:id')
//app.delete('/api/v1/tasks/:id')
