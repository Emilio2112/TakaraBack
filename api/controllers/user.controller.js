const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  getAllUsers,
  getUserById,
  getUserCollection,
  getUserPlaying,
  getUserCompleted,
  updateUser,
  deleteUserById,
  addGameToCollection,
  deleteGameFromCollection,
  addGameToPlaying,
  addGameToCompleted
};
function getAllUsers(req,res) {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

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
        return res.json(req.body._id);
      } else {
        user.games.push(req.body._id);
        user.save().then((fav) => {
          res.json(user.games);
        });
      }
    })
    .catch((err) => res.json(err));
}

function deleteGameFromCollection(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((user) => {
      if(user.games.indexOf(req.body._id) !== -1)
      user.games.splice(user.games.indexOf(req.body._id),1)
      if(user.playing.indexOf(req.body._id) !== -1) {
        user.playing.splice(user.playing.indexOf(req.body._id),1)
      }
      user.save().then(
        res.json(user));
    })
    .catch((err) => res.json(err));
}

function addGameToPlaying(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((result) => {
      result.playing.push(req.body._id);
      result.save().then((fav) => {
        res.json(result.playing);
      });
    })
    .catch((err) => res.json(err));
}

function addGameToCompleted(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((result) => {
      let index = result.playing.indexOf(req.body._id);
      result.playing.splice(index, 1);
      console.log(result)
      result.completed.push(req.body._id);
      result.save().then((fav) => {
        res.json(result.completed);
      });
    })
    .catch((err) => res.json(err));
}