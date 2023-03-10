const router = require('express').Router()

const {
    getAllGames,
    getGame,
    createGame,
    updateGame,
    deleteGame
} = require('../controllers/game.controller')

const { 
    authUser,
    adminCheck
 } = require('../utils')

router.get('/', getAllGames)
router.get('/:id', getGame)
router.post('/',authUser, createGame)
router.put('/:id',authUser, adminCheck, updateGame)
router.delete('/:id',authUser, adminCheck, deleteGame)

module.exports = router