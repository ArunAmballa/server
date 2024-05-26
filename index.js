const express=require('express');
const cors=require("cors")
const app=express()


app.use(cors())

app.get("/",(req,res)=>{
    res.json({message:"Welocme to Backned Server"})
})


app.listen(8080,(req,res)=>{
    console.log("Server Listening")
})