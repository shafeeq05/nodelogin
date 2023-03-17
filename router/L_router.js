const express = require('express')
const router=express.Router()
const sign=require('../source/mongo')

router.get("/",(req,res)=>{
    // res.set('Content-Type', 'html/plain')
    res.render('login',{error:""})
})
router.post('/',async(req,res)=>{
    
        // console.log(req.body);
        
        const uname = req.body.usrname
        const pwd= req.body.pwd
        let data = await sign.find({name:uname,password:pwd},{_id:0}).then()
      console.log(data.length);
    if(data.length>0){
        res.render('index')
    }else{
        res.render('login',{error:"please check your user name and password"})
    }
    
    
        
        
    })


module.exports=router