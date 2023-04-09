const router = require("express").Router();
const { authUser } = require("../utils");

const {
  getUserById,
  getUserCollection,
  getUserPlaying,
  getUserCompleted,
  updateUser,
  deleteUserById,
  addGameToCollection,
  addGameToPlaying,
  addGameToCompleted
} = require("../controllers/user.controller");

router
  .get("/profile", authUser, getUserById)
  .get("/collection", authUser, getUserCollection)
  .get("/playing", authUser, getUserPlaying)
  .get("/completed", authUser, getUserCompleted)
  .put("/profile", authUser, updateUser)
  .delete("/profile", authUser, deleteUserById)
  .patch("/favorite/add", authUser, addGameToCollection)
  .patch("/playing/add", authUser, addGameToPlaying)
  .patch("/completed/add", authUser, addGameToCompleted)

module.exports = router;
