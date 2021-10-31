const express = require('express');
const app = express();
app.use(express.json());
require('dotenv/config');
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
}).then(result=>{
    console.log('Connected to mongodb');
}).catch(err=>{
    console.log('Connection failed');
});  
const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log('App running on port ${port}');
});
//const bodyParser = require('body-parser');  NO NEED IN EXPRESS 4.16 or higher
const authRoutes = require('./routes/auth');
app.use('/auth',authRoutes);


// app.listen(8080);

// module.exports=app;