const mongoose=require('mongoose')

const notesSchema={
    cusName:String,
    address:String,
    phone:Number,
    naam:String
}

const Note=mongoose.model("Note",notesSchema)


module.exports=Note