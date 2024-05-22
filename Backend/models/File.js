const dynamoose = require("dynamoose");
const uuid = require('uuid');

const File = dynamoose.model("File", {
    id : {
        type : String,
        default : uuid.v1(),
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    originalname : {
        type : String,
        required : true,
    },
    size : {
        type : String,
        required : true,
    },
    owner: {
        type : String,
        required : true,
    },
    isdeleted : {
        type : Boolean,
        required : true,
        default : false,
    }
    
});

module.exports = File;