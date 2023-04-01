const express = require('express')
const bcrypt = require('bcrypt')
const router=express.Router()
const sign=require('../source/mongo')
const scheema =require('../source/idxscheema')


router.get("/",async(req,res)=>{
    // res.set('Content-Type', 'html/plain')
    // console.log(req.cookies.login.data);
   
    try {
    const cooki=req.cookies.login.data[0].phone
    const data = await scheema.find({phone:cooki})
    console.log("--------",data[0].phone);
    if(data[0].phone){
        res.redirect('/users')
        console.log("true");
    }else{
        console.log('false');
    }
    }catch (error) {
        res.render('login',{error:""})
}
    

})
router.post('/',async(req,res)=>{

       



    const ph= await scheema.find()
        // console.log(ph);
        
        const uname = req.body.usrname
        const pwd= req.body.pwd
        // console.log(pwd);
        const data = await sign.find({name:uname}).then()
                console.log('dataaaaaaaaa',data);
        console.log("data length ---------",data.length);
        if(data!=0){
           const password = data[0].password
       bcrypt.compare(pwd,password).then (resu=>{
            // console.log(resu);

             if(resu){
             //   const phone= ph[0].phone
            
                console.log(data[0].phone);
            const fil=ph.filter(ph=>{return ph.phone===data[0].phone})
        console.log("fil length ------------",fil.length);
        if(fil.length!=0){
            res.cookie('login',{data})
            res.redirect('/users')
        }else{
            res.cookie('login',{data})

            res.redirect('/index')
        }
    }else{
        res.render('login',{error:"please check your  password"})
    }
        }).catch(()=>res.render('login',{error:'please check your  password'}))
        }else{
            res.render('login',{error:"please check your user name"})
        }

        
    //   console.log(data[0].password);
    // if(data.length>0){
    //     const fil=ph.filter(ph=>{return ph.phone===data[0].phoneNo})
    //     console.log(fil.length);
    //     if(fil.length!=0){
    //         res.render('users',{data:ph})
    //     }else{
    //         res.render('index')
    //     }
        
    // }else{
    //     res.render('login',{error:"please check your user name and password"})
    // }
    
    
        
        
    })


module.exports=router;
