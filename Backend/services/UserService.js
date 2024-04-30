const User = require("../models/User");


const findUserByEmail = async(email) => {
    try {
        const user = await User.get(email);
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

const findUserByEmailAndPassword = async(email, password) => {
    try {
        const user = await User.get(email);
        if (user && user.password === password) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {findUserByEmail, findUserByEmailAndPassword}