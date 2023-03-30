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
      games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'game'
      }],
      playing: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'game'
      }],
      completed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'game'
      }]
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel