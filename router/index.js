const express=require('express')
const router=express.Router()
const multer=require('multer')
const scheema=require('../source/idxscheema')
const storage = require('../utils/disckstorage')
const upload = multer({storage:storage})
const phone = require('../source/mongo')

router.get('/',(req,res)=>{

    try {
        console.log("cokie----------",req.cookies.login.data[0].phone);
        const phone=req.cookies.login.data[0].phone
        console.log(phone);
        res.render('index',{phone})
        
    } catch (error) {
        res.redirect('/')
        
    }

  

})


router.post('/',upload.single("picture"),async(req,res)=>{
    
    const number= await phone.find()
    const phoneno=req.body.phoneNO
    console.log(number);
    console.log(req.file.filename)
    const data = await  scheema({
        name:req.body.name,
        place:req.body.place,
        phone:req.body.phone,
        picture:req.file.filename,
        email:req.body.email,
        bio:req.body.bio,
    }).save()
    
    res.cookie('index',{data})
//    res.render('users',{data})
    res.redirect('/users')
//    console.log(data);
})



module.exports=router