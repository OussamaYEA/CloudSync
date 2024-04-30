const dynamoose = require("dynamoose");
/* const dynamoose = require('dynamoose');

const dynamoConfig = dynamoose.aws.sdk.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'us-east-1' // Replace with your desired region
});
module.exports = dynamoConfig; */
// Create new DynamoDB instance

function setDynamooseInstance(){
  console.log(process.env.AWS_SECRET_ACCESS_KEY);
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
        "aws_session_token" : process.env.aws_session_token,
    },
    "region": process.env.AWS_DEFAULT_REGION
});

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);
}

module.exports = {setDynamooseInstance};