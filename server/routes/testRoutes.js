import express from 'express'
import { adminOnly, protect } from '../middleware/authMiddleware.js'
import { createTest, getAllTests } from '../controllers/testController.js'

const router = express.Router()

router.post("/create",protect,adminOnly,createTest);

// admin only

router.get("/all",protect,getAllTests)

export default router;