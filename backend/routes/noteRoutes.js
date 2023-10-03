import express from "express"
import mongoose from "mongoose"

import {
	getNotes,
	getNotesById,
	createNote,
	deleteNote,
} from "../controllers/noteController.js"
// import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/notes/:userId", getNotes)
router.post("/notes/:userId", createNote)
router.delete("/notes/:userId/:noteId", deleteNote)
router.get("/notes/:id", getNotesById)

router.get("/test", (req, res) => {
	res.send("Test route works.")
})

export default router
