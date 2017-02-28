import express from 'express'

import * as UserController from '../controllers/users'

const router = express.Router()

router.post("/users", UserController.create)
router.get("/users", UserController.all)
router.get("/users/:id", UserController.get)
router.put("/users/:id", UserController.put)
router.delete("/users", UserController.remove)
router.get('/current-user', UserController.getCurrentUser)

export default router
