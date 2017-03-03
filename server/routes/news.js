import express from 'express'

import * as NewsController from '../controllers/news'
import checkToken from '../middlewares/checkToken'
import getUser from '../middlewares/getUser'

const router = express.Router()

router.post("/news", NewsController.create)
router.get("/news", NewsController.all)
router.get("/news/:id", NewsController.get)
router.use(checkToken)
router.use(getUser)
router.put("/news/:id", NewsController.put)
router.delete("/news/:id", NewsController.remove)

export default router
