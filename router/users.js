const express = require('express')

const router = express.Router()
const scheema = require('../source/idxscheema')
const users = require('../source/mongo')

router.get('/',async(req,res)=>{

//  console.log(req.cookies.login.data);
 const data= await scheema.find()
//  console.log("my data---------------",req.cookies.login);
 res.render('users',{data})
  
})

router.post('/delete',(req,res)=>{
   console.log("deleted");
   res.redirect('/users')
})

router.get('/logout',(req,res)=>{
   
   res.clearCookie('login')
   res.clearCookie('data')
   res.clearCookie('index')
   res.redirect('/')
})

router.post('/',async(req,res)=>{
   try {

      const  phone=req.body.phone
      const delet=req.body.delete
      console.log("deleeet-------------",delet);
      console.log(phone);
      if(phone>0){
      const data= await  scheema.find({phone:phone})
      // console.log(data[0].picture);
      res.cookie('data',{data});
      res.redirect('/profile')
      }
      else if(delet>0){
         console.log("deleted-------------",req.body);
        await scheema.deleteOne({phone:req.body.delete})
        await users.deleteOne({phone:req.body.delete})
         res.redirect('/users')
      }
   
      
   }
  
 catch (error) {
console.log(error);}
})

module.exports=router
