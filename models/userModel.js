import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {type: String,required:true,default:'guest'},
    email : {type: String},
    password : {type: String},
    image : {type: String,default:'https://previews.123rf.com/images/vitechek/vitechek1907/vitechek190700199/126786791-user-login-or-authenticate-icon-human-person-symbol-vector.jpg'},
    emailVerified:{type:String,default:null}

},{timestamps:true})

let DataSet = mongoose.models.user || mongoose.model('user',userSchema)

export default DataSet;