const express=require('express')
const router=express.Router()
const multer=require('multer')
const scheema=require('../source/idxscheema')
const storage = require('../utils/disckstorage')
const upload = multer({storage:storage})


router.post('/',upload.single("picture"),async(req,res)=>{
    // console.log(req.body)
    console.log(req.file.filename)
    await  scheema({
        name:req.body.name,
        place:req.body.place,
        phone:req.body.phone,
        picture:req.file.filename,
        email:req.body.email,
        bio:req.body.bio
    }).save()
   const data= await scheema.find({},{_id:0})
   res.render('users',{data})
   console.log(data);
})




module.exports=router