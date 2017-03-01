import express from 'express'

import * as UserController from '../controllers/users'
import checkSession from '../middlewares/checkSession'

const router = express.Router()

router.get("/users", UserController.all)
router.get("/users/:id", UserController.get)
router.use(checkSession)
router.get('/current-user', UserController.getCurrentUser)
router.put("/users/:id", UserController.put)
router.delete("/users/:id", UserController.remove)

export default router
