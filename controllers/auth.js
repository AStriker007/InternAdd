const Cred=require('../models/login_cred');
const bcrypt=require('bcryptjs');

exports.postSignup=(req,res,next)=>{
  
    const email=req.body.email;
    const password=req.body.password;
    Cred.findOne(
    {email:email}).then(userDoc=>{
      if(userDoc){
        console.log('Email already exists');
         return res.redirect('/signup');
       }
    })
      bcrypt.hash(password,12).then(hashedPassword=>{
        const user1=new Cred({
          email:email,
          password:hashedPassword
        });
        return user1.save();    
  }).then(result=>{
    res.redirect('/homepage');
  }).catch(err=>{
    console.log(err);
  });
  
        
    
};
exports.postLogin=(req,res,next)=>{
  email=req.body.email;
  password=req.body.password;
  Cred.findOne({email:email}).then(user=>{
    if(!user){
      console.log('Email didnot match');
     return res.redirect('/login');
    }
    console.log('email  matched');
    bcrypt.compare(password,user.password).then(doMatch=>{
      if(doMatch){
        console.log('password matched');
        return res.redirect('/homepage');
      }
      console.log('password didnot match');
      res.redirect('/login');
    }).catch(err=>{
      console.log(err);
      res.redirect('/login');
    });
  });
};