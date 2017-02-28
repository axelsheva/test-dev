import express from 'express'

import * as UserController from '../controllers/users'
import checkToken from '../middlewares/checkToken'
import getUser from '../middlewares/getUser'

const router = express.Router()

router.post("/users", UserController.create)
router.get("/users", UserController.all)
router.get("/users/:id", UserController.get)
router.use(checkToken)
router.use(getUser)
router.get('/current-user', UserController.getCurrentUser)
router.put("/users/:id", UserController.put)
router.delete("/users/:id", UserController.remove)

export default router
