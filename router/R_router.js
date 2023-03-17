const express=require('express')
const router=express.Router()
const sign=require('../source/mongo')

router.get('/',(req,res)=>{
    res.render('signup')
})
router.post('/',async(req,res)=>{
        console.log(req.body);
        await new sign({
            name:req.body.regname,
            email:req.body.email,
            phone:req.body.phno,
            password:req.body.regpwd
            
        }).save()
      res.render('login',{error:""})
    })

module.exports=router