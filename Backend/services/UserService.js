const User = require("../models/User");

const findUserById = async(id) => {
    try {
        const user = await User.scan('id').eq(id).exec();
        if (user.length > 0) {
            return user[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const findUserByUsername = async(username) => {
    try {
        const user = await User.scan('username').eq(username).exec();
        if (user.length > 0) {
            return user[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const findUserByEmail = async(email) => {
    try {
        const user = await User.scan('email').eq(email).exec();
        if (user.length > 0) {
            return user[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const findUserByEmailAndPassword = async(email, password) => {
    try {
        const user = await User.scan('email').eq(email).exec();
        if (user.length < 1){
            return null;
        }
        if (user[0].password === password) {
            return user[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = {findUserById, findUserByUsername, findUserByEmail, findUserByEmailAndPassword}