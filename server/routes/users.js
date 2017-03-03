import express from 'express'

import * as UserController from '../controllers/users'
import checkToken from '../middlewares/checkToken'
import getUser from '../middlewares/getUser'

const router = express.Router()

router.get('/current-user', UserController.getCurrentUser)
router.get("/users", UserController.all)
router.get("/users/:id", UserController.get)
router.post("/users", checkToken, getUser, UserController.create)
router.put("/users/:id", checkToken, getUser, UserController.put)
router.delete("/users/:id", checkToken, getUser, UserController.remove)

export default router
