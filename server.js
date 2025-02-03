const express = require('express');

const app = express()
app.use(express.json())

PORT = 5000;
app.get('/',(req,res)=>{
    return res.status(200).json({message:"Server is running"})
})
app.post("/signup",(req,res)=>{
    const {Username, Email, Password, DOB} = req.body;
    if (!Username) {
        return res.status(400).json({message:"Username cannot be empty"})
    }if (!Email) {
        return res.status(400).json({message:"Email cannot be empty"})
    }if (!Password || Password.length<8 || Password.length>16) {
        return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16."})
    }

    return res.status(201).json({message:"Signup successful",Details:[Username, Email, Password, DOB]})
})

app.listen(PORT,()=>{
    console.log("http://localhost:5000")
})