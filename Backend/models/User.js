const dynamoose = require("dynamoose");
const uuid = require('uuid');

const User = dynamoose.model("User", {
    "id" : {
        type : String,
        default : uuid.v1(),
        required : true,
        hashKey: true,
    },
    "username" : {
        type : String,
        required : true
    },
    "email" : {
        type : String,
        required : true
    },
    "password" : {
        type : String,
        required : true
    },
    "is_confirmed" : {
        type : Boolean,
        default : true,
        required : true
    },
    "is_blocked" : {
        type : Boolean,
        default : false,
        required : true
    }
});

module.exports = User;