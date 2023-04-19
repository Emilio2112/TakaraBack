const router = require('express').Router()

const {
    getAllGames,
    getGame,
    createGame,
    updateGameStats,
    deleteGame
} = require('../controllers/game.controller')

const { 
    authUser,
    adminCheck
 } = require('../utils')

router.get('/', getAllGames)
router.get('/:id', getGame)
router.post('/',authUser, createGame)
router.put('/:id',authUser, updateGameStats)
router.delete('/:id',authUser, adminCheck, deleteGame)

module.exports = router