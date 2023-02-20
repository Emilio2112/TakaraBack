const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt')

module.exports = {
    getUserById,
}

function getUserById(req, res) {
    res.json(res.locals.user)
}