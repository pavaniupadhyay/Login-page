const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://pavaniupadhyay:pavani@cluster0.9dslwte.mongodb.net/authentication?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log('Connected to MongoDB')
  }).catch((err)=>{
    console.log('Error connecting to MongoDB',err)
  })
