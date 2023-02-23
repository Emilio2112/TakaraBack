const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt')

module.exports = {
    getUserById,
    updateUser
}

function getUserById(req, res) {
    res.json(res.locals.user)
}

function updateUser(req, res) {
    const users = res.locals.user
    if(req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
    }
    UserModel
        .findByIdAndUpdate(users, req.body, {
            new: true
        })
            .then((response) => res.json(response))
            .catch((err) => res.json(err))
}