const router = require("express").Router();
const { authUser } = require("../utils");

const {
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
} = require("../controllers/user.controller");

router
  .get("/", authUser, getAllUsers)
  .get("/profile", authUser, getUserById)
  .get("/collection", authUser, getUserCollection)
  .get("/playing", authUser, getUserPlaying)
  .get("/completed", authUser, getUserCompleted)
  .put("/profile", authUser, updateUser)
  .delete("/profile", authUser, deleteUserById)
  .patch("/favorite/add", authUser, addGameToCollection)
  .patch("/favorite/delete", authUser, deleteGameFromCollection)
  .patch("/playing/add", authUser, addGameToPlaying)
  .patch("/completed/add", authUser, addGameToCompleted)

module.exports = router;
