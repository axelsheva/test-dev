import express from 'express'

import * as NewsController from '../controllers/news'
import checkToken from '../middlewares/checkToken'
import getUser from '../middlewares/getUser'

const router = express.Router()

router.get("/news", NewsController.all)
router.get("/news/:id", NewsController.get)
router.post("/news", checkToken, getUser, NewsController.create)
router.put("/news/:id", checkToken, getUser, NewsController.put)
router.delete("/news/:id", checkToken, getUser, NewsController.remove)

export default router
