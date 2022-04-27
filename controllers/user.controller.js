const UserModel = require ('../models/user.model');
const ObjectID = require ('mongoose').Types.ObjectId;



// CRUD function to get all users:
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

//CRUD function to get a user by ID:
module.exports.userInfo = (req, res) => {
    console.log (req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('Unknown ID : ' + req.params.id)

        UserModel.findById(req.params.id, (err, docs) => {
            if (!err) res.send(docs);
            else console.log ('Unknown ID : ' + err);
        }).select ('-password');
};