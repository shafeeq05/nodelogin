const express=require('express')
const bcript = require('bcrypt')
const router=express.Router()
const sign=require('../source/mongo')
const saltR = 10
router.get('/',(req,res)=>{
    res.render('signup')
})
router.post('/',async(req,res)=>{
    const mypass=req.body.regpwd.trim()
    
    const decript = bcript.hash(mypass,saltR).then(function(hash) {
        return hash
    }); 
    console.log(await decript);
        
        await new sign({
            name:req.body.regname.trim(),
            email:req.body.email,
            phone:req.body.phno,
            password:await decript
            
        }).save()
    //   res.render('login',{error:""})
    res.redirect('/')
    })

module.exports=router