const mongo=require('mongoose')

const scheema=new mongo.Schema({

name:{
    type: String
},
place:{
    type:String
},
phone:{
    type:String
},
picture:{        
    type:String,
    // required:true
},
email:{
    type:String
},
bio:{
    type:String
}
})
module.exports=mongo.model('userdetail',scheema)