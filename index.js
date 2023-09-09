const express = require("express")

const app = express();
app.use(express.json())

let users = {}

app.listen(4000)

//GET Method
app.get('/user',(req,res)=>{
    res.send(users)
})

//POST Method
app.post('/user',(req,res)=>{
    users=req.body
    res.json({
        message:"Data recieved successfully",
        users:req.body
    })
    console.log(req.body)
    
})

//PATCH Method ->> To Update
app.patch('/user',(req,res)=>{
    let dataToBeUpdated = req.body
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key]
    }
    res.json({
        message:"Data updated successfully"
    })
    console.log('data updated ->',req.body)
})

//DELETE Method

app.delete('/user',(req,res)=>{
    users={}
    res.json({
        message:"Data has been deleted"
    })
})