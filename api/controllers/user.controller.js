const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  getUserById,
  getUserCollection,
  getUserPlaying,
  getUserCompleted,
  updateUser,
  deleteUserById,
  addGameToCollection,
};

function getUserById(req, res) {
  res.json(res.locals.user);
}

function getUserCollection(req, res) {
  UserModel.findById(res.locals.user.id)
    .populate("games")
    .then((response) => res.json(response.games))
    .catch((err) => res.json(err));
}

function getUserPlaying(req, res) {
  UserModel.findById(res.locals.user.id)
    .populate("playing")
    .then((response) => res.json(response.playing))
    .catch((err) => res.json(err));
}

function getUserCompleted(req, res) {
  UserModel.findById(res.locals.user.id)
    .populate("completed")
    .then((response) => res.json(response.completed))
    .catch((err) => res.json(err));
}

function updateUser(req, res) {
  const users = res.locals.user;
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  UserModel.findByIdAndUpdate(users, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function deleteUserById(req, res) {
  UserModel.findByIdAndDelete(res.locals.user.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function addGameToCollection(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((user) => {
      if (user.games.toString().split(",").includes(req.body._id) === true) {
        return res.json("El juego ya está en la colección");
      } else {
        user.games.push(req.body._id);
        user.save().then((fav) => {
          res.json(user.games);
        });
      }
    })
    .catch((err) => res.json(err));
}
