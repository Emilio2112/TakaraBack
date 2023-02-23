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
router.post('/', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router