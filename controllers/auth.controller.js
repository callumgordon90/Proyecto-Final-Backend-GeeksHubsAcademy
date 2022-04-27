const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000;


//Function to create the JSON Web Token:
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};



//CRUD function to register a user:
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const { pseudo, email, password } = req.body

    try {
        const user = await UserModel.create({ pseudo, email, password });
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        res.status(200).send({ err })
    }
}

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id })
    } catch (err) {
        res.status(200).json(err);
    }
}

module.exports.logout = (req, res) => {

}