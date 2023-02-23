const router = require("express").Router();
const {authUser} = require('../utils')

const {
    getUserById,
    updateUser
  } = require("../controllers/user.controller")

  router
    .get("/profile", authUser, getUserById)
    .put("/profile", authUser, updateUser)



  module.exports = router