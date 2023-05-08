const express=require('express')

const router=express.Router()
const Note=require("../models/noteModel")

router.route("/create").post((req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const address=req.body.address;
    const naam=req.body.naam;

    const newNote=new Note({
        name,
        phone,
        address,
        naam
    });

    newNote.save()
})

module.exports=router;