const dynamoose = require("dynamoose");

function setDynamooseInstance(){
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    "region": "us-east-1",
});

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);
}

module.exports = {setDynamooseInstance};