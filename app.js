const express=require('express')
const mongo=require('mongoose')
const body_parser=require('body-parser')
const app=express()
const { urlencoded } = require('body-parser')
// const session = require('express-session')
const cooki=require('cookie-parser')
app.use(body_parser(urlencoded({extended:true})))
app.use(body_parser.json())
app.set('view engine','ejs')
mongo.connect("mongodb://127.0.0.1:27017/Login")
.then(()=>{
    console.log("mongo connected");
}).catch((e)=>{
    console.log(e);
})

// app.use(session({ secret: 'shafeeq',resave: false, cookie: { maxAge: 60000 }}))
app.use(cooki())
app.use(express.static(__dirname+'/public'))
app.use(express.static('uploads'))
const loginrouter=require('./router/L_router')
const signuprouter=require('./router/R_router')
const index=require('./router/index')
const usrouter = require('./router/users')
const profile= require('./router/profile')


app.use('/signup',signuprouter)
app.use('/',loginrouter)
app.use('/index',index)
app.use('/users',usrouter)
app.use('/profile',profile)



app.listen(3000,()=>{
    console.log('server connected');
})


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








// data=  await new sign({
//     name:req.body.regname,
//     password:req.body.regpwd
// }).save().then()