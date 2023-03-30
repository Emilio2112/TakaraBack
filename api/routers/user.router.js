const router = require("express").Router();
const {authUser} = require('../utils')

const {
    getUserById,
    updateUser,
    deleteUserById,
    addGameToCollection
  } = require("../controllers/user.controller")

  router
    .get("/profile", authUser, getUserById)
    .put("/profile", authUser, updateUser)
    .delete("/profile", authUser, deleteUserById)
    .patch("/favorite/add", authUser, addGameToCollection)



  module.exports = router