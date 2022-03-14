const express= require("express")

const app = express()

app.get("/", (req,res)=>{
    res.send("<h1>WELCOME TO THE NODE APP</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1><b>You are on the about page. Say Hi !!!</b></h1>")
})

app.get("/work",(req,res)=>{
    res.send("<h1><b>You are on the work page. You can work now !!!</b></h1>")
})

// process.env.PORT
app.listen(3000,console.log("running on port 3000"));

