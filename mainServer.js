const express = require("express");
const app = express();
const port =9010
const cors=require('cors');
const  mongoose = require("mongoose");

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://niyamath:niyamath@cluster0.x4r2vwl.mongodb.net/notesDB")


app.use("/", require('./routes/noteRoute'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
