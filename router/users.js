const express = require('express')
const router = express.Router()
const scheema = require('../source/idxscheema')

router.get('/',async(req,res)=>{
   const data= await new scheema.find()
   log(data)
   res.render("users")
})

module.exports=router