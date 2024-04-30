const User = require("../models/User");
const { findUserByEmailAndPassword, findUserByEmail } = require("../services/UserService");


const registerUser = (async (req, res) => {
    try {
        const {username, email, password} = req.body
        if (!username || !email || !password ) return res.sendStatus(403)

        /* const checkExistEmail = await findUserByEmail(email); // todo
        if (checkExistEmail) {
            return res.status(403).send({message: "Email is already exist!"});
        } */

        await User.create({
            username,
            email,
            password
        }).catch(err => {
            res.status(500).json({"error" : err});
        })
        res.status(201).json()
    } catch (error) {
        res.status(500).json({"error" : error});
        console.log(error);
    }

})


const loginUser  = (async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) return res.sendStatus(403)
    const user = await findUserByEmailAndPassword(email, password)
    if (!user) return res.status(404).json({'meesage : ' : 'Wrong email or password'})
    if (user.is_blocked || !user.is_confirmed) return res.status(400).json({'meesage : ' : 'Confirm Your Account'})
    return res.status(200).json(user)
})

module.exports = {registerUser, loginUser};