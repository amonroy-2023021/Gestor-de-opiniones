import {Schema, model} from "mongoose"

const userSchema = Schema({
    name:{
        type: String,
        required: [true, "El campo no puede ir vacio"],
        maxLength: [25, "El nombre no puede tener mas de 25 caracteres"]
    },

    surname:{
        type: String,
        required: [true, "El campo no puede ir vacio"],
        maxLength: [true, "El apellido no puede exceder los 25 caracteres"]
    },

    password:{
        type: String,
        required: true,
        minLength: 8
    },

    email:{
        type: String,
        required: [true, "El campo no puede ir vacio"],
        unique: true
    },

    username:{
            type: String,
            required:true,
            unique: true
        }
    },       

    {
        versionKey: false,
        timeStamps: true
    })
    
    userSchema.methods.toJSON = function(){
        const { password, _id, ...user } = this.toObject()
        user.uid = _id
        return user
    }
    
    export default model("User", userSchema)