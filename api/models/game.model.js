const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name_original: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    released: {
        type: Date
    },
    background_image: {
        type: String
    },
    time: [{
        type: Number
    }],
    rating: [{
        type: Number
    }],
    platforms: [{
        type: String
    }]
})

const gameModel = mongoose.model('gamne', gameSchema)

module.exports = gameModel