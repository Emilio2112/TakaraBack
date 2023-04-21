const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    name_original: {
        type: String,
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
    ratings: [{
        type: Number
    }],
    platforms: [{
        type: Object
    }],
    screenshots: [{
        type: Object
    }],
    metacritic: {
        type: Number
    },
    metacritic_url: {
        type: String
    },
    esrb_rating: {
        type: Object
    },
    website: {
        type: String
    }
})

const gameModel = mongoose.model('game', gameSchema)

module.exports = gameModel