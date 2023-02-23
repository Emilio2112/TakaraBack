const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const gameRouter = require('./game.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/games', gameRouter)

module.exports = router