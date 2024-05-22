const User = require("../models/User");
const {findUserByUsername, findUserByEmailAndPassword, findUserByEmail } = require("../services/UserService");
const AWS = require("aws-sdk");
const fs = require('fs');

const registerUser = (async (req, res) => {
    try {
        const {username, email, password} = req.body
        if (!username || !email || !password ) return res.sendStatus(403)
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return res.status(403).json({"error : " : "invalid Email address"})
        if (password.length < 8) return res.status(403).json({"error" : "Password should be atleast 8 charachters"})
        
        const checkExistUsername = await findUserByUsername(username);
        if (checkExistUsername) {
            return res.status(403).send({message: "Username is already exist!"});
        }
        
        const checkExistEmail = await findUserByEmail(email); 
        if (checkExistEmail) {
            return res.status(403).send({message: "Email is already exist!"});
        }

        const user = await User.create({
            username,
            email,
            password
        }).catch(err => {
            res.status(500).json({"error" : err});
        })
        
        // Create Folder in S3 Bucket
        const s3 = new AWS.S3();
        await s3.putObject({
            Bucket : "cloudsync-test",
            Key : user.username+"-"+user.id+"/"
        }, (err, data) => {
            if (err) {
                console.error('Error creating Folder:', err);
            }
        });
        
        // Create Folder in Local
        const newFolder = 'uploads/user';
        if (!fs.existsSync(newFolder)){
            fs.mkdirSync(newFolder, { recursive: true });
        }
        
        
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({"error" : error});
    }

})


const loginUser  = (async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) return res.sendStatus(403)
    const user = await findUserByEmailAndPassword(email, password)
    if (!user) return res.status(404).json({'error : ' : 'Wrong email or password'})
    if (user.is_blocked || !user.is_confirmed) return res.status(400).json({'error : ' : 'Confirm Your Account'})
    return res.status(200).json(user)
})

module.exports = {registerUser, loginUser};