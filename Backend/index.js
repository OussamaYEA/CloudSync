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

const user_routes = require('./routes/User');
app.use('/api/user/', user_routes)

const file_routes = require('./routes/File');
app.use('/api/file/', file_routes)

app.listen(4000)