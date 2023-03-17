const express=require('express')
const mongo=require('mongoose')
const body_parser=require('body-parser')
const sign=require('./source/mongo')
const app=express()
const { urlencoded } = require('body-parser')
app.use(body_parser(urlencoded({extended:true})))
app.use(body_parser.json())
app.set('view engine','ejs')
mongo.connect("mongodb://127.0.0.1:27017/Login")
.then(()=>{
    console.log("mongo connected");
}).catch((e)=>{
    console.log(e);
})

const loginrouter=require('./router/L_router')
const signuprouter=require('./router/R_router')

app.use('/signup',signuprouter)
app.use('/login',loginrouter)


// app.get('/signup',(req,res)=>{
//     res.render('signup')
// })

// app.get('/',(req,res)=>{
//     res.render('login')
// })

// app.post('/signup',async(req,res)=>{
//     console.log(req.body);
//     await new sign({
//         name:req.body.regname,
//         password:req.body.regpwd
//     }).save()
//   res.render('login')
// })
// app.post('/login',async(req,res)=>{
//     // console.log(req.body);
//     const uname = req.body.usrname
//     const pwd= req.body.pwd
//     let data = await sign.find({},{_id:0}).then()
//     data.forEach((x)=>{
        
//         if(x.name==uname&&x.password==pwd){
//             console.log("shafeeq");
//             res.render('index')
//             res.end()
//         }else{
//             console.log("hello error");
//             res.render('login')
//         }
//     })
    
// })




app.listen(3000,()=>{
    console.log('server connected');
})



// data=  await new sign({
//     name:req.body.regname,
//     password:req.body.regpwd
// }).save().then()