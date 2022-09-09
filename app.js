const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("hello world!");
})

app.listen(port,function(req,res){
    console.log("server started")
});