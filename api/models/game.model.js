const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
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
        type: Object
    }]
})

const gameModel = mongoose.model('game', gameSchema)

module.exports = gameModel