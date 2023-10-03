import path from "path"
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import noteRoutes from "./routes/noteRoutes.js"

import connectDB from "./config/db.js"
const port = process.env.PORT || 5000

import userRoutes from "./routes/userRoutes.js"
connectDB()
const app = express()
import cors from "cors"
app.use(cors())
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

if (process.env.NODE_ENV === "production") {
	const __dirname = path.resolve()
	app.use(express.static(path.join(__dirname, "frontend/dist")))

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
	)
} else {
	app.get("/", (req, res) => {
		res.send("Server is ready")
	})
}

app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
