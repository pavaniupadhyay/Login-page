const zod=require("zod");
const signupValidation=((req,res,next)=>{
  const schema=zod.object({
    name:zod.string().min(3).max(50).required(),
    email:zod.string().email().required(),
    password:zod.string().min(50).required(),
  });
  const {error}=schema.validate(req.body);
  if(error){
    return res.status(400).json({message:"bad reqvest"});
    }
    next();
})
const signinValidation=((req,res,next)=>{
  const schema=zod.object({
    email:zod.string().email().required(),
    password:zod.string().min(50).required(),
  });
  const {error}=schema.validate(req.body);
  if(error){
    return res.status(400).json({message:"bad reqvest"});
    }
    next();
})
module.exports={
  signupValidation,
  signinValidation
}