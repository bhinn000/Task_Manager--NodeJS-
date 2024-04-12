const mongoose=require('mongoose')

const connectDB=(url)=>{ //this 'url' is from app.js
    return mongoose.connect(url)
    .then(()=>console.log("Connected to the Database"))
    .catch((err)=>console.log(err))
}

module.exports=connectDB
