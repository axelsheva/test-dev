import express from 'express'

import * as NewsController from '../controllers/news'

const router = express.Router()

router.post("/news", NewsController.create)
router.get("/news", NewsController.all)
router.get("/news/:id", NewsController.get)
router.put("/news/:id", NewsController.put)
router.delete("/news/:id", NewsController.remove)

export default router
