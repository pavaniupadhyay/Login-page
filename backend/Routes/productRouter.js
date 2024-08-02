

const router = require('express').Router();

router.post('/', (req,res)=>{
  res.status(200).json([
    {
      name:"mobile",
      price:5000
    },
    {
      name:"laptop",
      price:10000
    }
  ])
});
