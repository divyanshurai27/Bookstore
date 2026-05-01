import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname : {
        typeof : String,
        required :true,
    },
    email: {
        typeof : String ,
        required : true,
        unique : true ,
    },
    password:{
        typeof : String,
        required : true ,

    }
})

const User  = mongoose.modal("User",userSchema);
export default User;