const express=require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app=express();
const authrouter=require('./routes/authRouter');


require("./Models/db");

const PORT=process.env.PORT || 8081;


app.get("/signup" ,(req,res)=>{
  res.send("signup page");
})
app.use(cors());
app.use(bodyParser.json());
app.use("/auth",authrouter);

app.listen(PORT ,()=>{
  console.log(`server is running on port ${PORT}`);
})
