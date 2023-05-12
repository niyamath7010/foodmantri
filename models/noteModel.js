const mongoose=require('mongoose')

const notesSchema={
    cusname:String,
    address:String,
    phone:Number,
    naam:String
}

const Note=mongoose.model("Note",notesSchema)


module.exports=Note