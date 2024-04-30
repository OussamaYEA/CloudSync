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
    }
});

module.exports = File;