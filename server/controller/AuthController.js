const UserModel=require("../Models/userModel")
const bcrypt = require('bcrypt');
const signup= async(req,res)=>{
try{
  const {name,email,password}=req.body;
  const existingUser=await UserModel.findOne({email});
  if(existingUser){
    return res.status(400).json({message:"Email already exists", succcess:false});
    }
    const userModel=new UserModel({name,email,password});
    userModel.password=await bcrypt.hash(password,10);
    await userModel.save();
    res.status(201).json({message:"User created successfully",  succcess:true});
}catch(err){
  res.status(500).json({
    message:"Error creating user",
    succcess:false
  })
}
}
module.exports=signup;