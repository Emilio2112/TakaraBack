const router = require("express").Router();

const {
    getUserById
  } = require("../controllers/user.controller")

  router.get("/profile", getUserById);

  module.exports = router