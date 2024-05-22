const User = require("../models/User");

const {findUserById, findUserByUsername, findUserByEmail} = require("../services/UserService")

const getUserById = (async (req, res) => {
    try {
        const id = req.params.id;
        const user = await findUserById(id);
        if (user == null){
            return res.sendStatus( 404 )
        }
        return res.status(200).json(user)
        
    } catch (e) {res.status(500).send(e.message);}
})



const updateUser = (async (req, res) => {
    try {
        const {id, username, email} = req.body;
        const user = await findUserById(id);
        if (user == null){
            return res.sendStatus( 403 )
        }
        const checkExistUsername = await findUserByUsername(username);
        if (checkExistUsername) {
            return res.status(403).send({message: "Username is already exist!"});
        }
        const checkExistEmail = await findUserByEmail(email); 
        if (checkExistEmail) {
            return res.status(403).send({message: "Email is already exist!"});
        }
        
        await User.update({"id" : id, "username": username,"email": email})
        return res.status(200).json();
        
    } catch (e) {res.status(500).send(e.message);}
})

module.exports = {getUserById, updateUser}