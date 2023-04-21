const mongoose = require("mongoose");
const Game = require("../models/game.model");

function getAllGames(req, res) {
  Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.json(err));
}

function getGame(req, res) {
  Game.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function createGame(req, res) {
  Game.create(req.body)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
}

function updateGameStats(req, res) {
  Game.findById(req.params.id)
    .then((result) => {
      result.time.push(req.body.time)
      result.rates.push(req.body.rates)
      result.save()
      res.json(result)
    })
    .catch((error) => res.json(error));
}

function deleteGame(req, res) {
  Game.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
}



module.exports = {
  getAllGames,
  getGame,
  createGame,
  updateGameStats,
  deleteGame
};
