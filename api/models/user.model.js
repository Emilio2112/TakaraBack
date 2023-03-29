const mongoose = require("mongoose")
require("mongoose-type-email")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
      },
      email: {
        type: mongoose.SchemaTypes.Email,
        required: [true, "Email required"],
        unique: [true, "This email is registered"]
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
      },
      games: {
        type: Array,
        required: false
      },
      playing: {
        type: Array,
        required: false
      },
      completed: {
        type: Array,
        required: false
      }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel