require('dotenv').config()
const express = require('express');
const app = express();
const { setDynamooseInstance } = require('./config/dynamooseConfig');
setDynamooseInstance()

const cors = require('cors');
app.use(cors({origin:"*"}));

app.use(express.json()) 
app.use(express.static('public')); 
app.use('/uploads', express.static('uploads'));


const auth_routes = require('./routes/Auth');

app.use('/api/auth/', auth_routes)


app.listen(process.env.PORT)