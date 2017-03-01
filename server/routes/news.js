import express from 'express'

import * as NewsController from '../controllers/news'
import checkSession from '../middlewares/checkSession'

const router = express.Router()

router.get("/news", NewsController.all)
router.get("/news/:id", NewsController.get)
router.use(checkSession)
router.post("/news", NewsController.create)
router.put("/news/:id", NewsController.put)
router.delete("/news/:id", NewsController.remove)

export default router
