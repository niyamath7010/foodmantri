const mongoose=require('mongoose')

var mongoURL='mongodb+srv://niyamathullahkhader:niyamath@cluster0.yazjhyq.mongodb.net/test'

// mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log("database connected")
})

db.on("error",()=>{
    console.log("database connection failed")
})

module.exports=mongoose