import express from 'express'
import { adminOnly, protect } from '../middleware/authMiddleware.js'
import { addQuestion, getQuestionsByTest } from '../controllers/questionController.js'

const router = express.Router()

// add question

router.post("/add",protect,adminOnly,addQuestion);

router.get("/:testId",protect,getQuestionsByTest)

export default router;