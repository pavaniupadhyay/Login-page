const signup = require("../controller/AuthController");
const { signinValidation } = require("../middleware/authValidation");

const router=require("express").Router();

router.post("/signin",(req,res)=>{
  res.send("signin");
});

router.post("/signup",signinValidation,signup =>{
          
});

module.exports = router;