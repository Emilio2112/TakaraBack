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
} = require("../controllers/user.controller");

router
  .get("/profile", authUser, getUserById)
  .get("/collection", authUser, getUserCollection)
  .get("/playing", authUser, getUserPlaying)
  .get("/completd", authUser, getUserCompleted)
  .put("/profile", authUser, updateUser)
  .delete("/profile", authUser, deleteUserById)
  .patch("/favorite/add", authUser, addGameToCollection);

module.exports = router;
