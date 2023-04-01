const { json } = require('body-parser')
const express=require('express')
const router = express.Router()
const scheema = require('../source/idxscheema')
const multer = require('multer')
const storage=require('../utils/disckstorage')
const upload= multer({storage:storage})


router.get('/',async(req,res)=>{

    try {
        // console.log(req.cookies.data.data);
    const data = await req.cookies.data.data
    console.log(data);
    // const picture = req.cookies.data.data[0].picture
    res.render('profile',{data})
        
    } catch (error) {
        res.redirect('/')
    }

    
})



router.post('/',upload.single('picture') ,async (req,res)=>{
    const ph=req.body.btn
    try {
        console.log(req.file.originalname)
        await scheema.updateOne({phone:ph},{
            picture:req.file.originalname,
            name:req.body.name,
            place:req.body.place,
            email:req.body.email,
            bio:req.body.bio
        })
        const data = await req.cookies.data.data
        res.cookie('login',{login})
        res.redirect('/users')
    } catch (error) {
        console.log('false');
        await scheema.updateOne({phone:ph},{
            // picture:req.file.originalname,
            name:req.body.name,
            place:req.body.place,
            email:req.body.email,
            bio:req.body.bio
        })
        const data = await req.cookies.data.data
        res.cookie('data',{data})
        res.redirect('/users')
        

    }
    
    // const picture = req.cookies.data.data[0].picture
    // console.log(picture);
  

})

module.exports=router