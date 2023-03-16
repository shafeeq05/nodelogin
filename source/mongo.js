const mongo = require('mongoose')
const scheema = mongo.Schema

const signupscheema= new scheema({
    name:{
        type: String
    },
    password:{
        type:String
    }
})
module.exports=mongo.model('login',signupscheema)