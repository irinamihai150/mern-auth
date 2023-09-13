import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000

import userRoutes from "./routes/userRoutes.js"
const app = express()

app.use("/api/users", userRoutes)
app.get("/", (req, res) => {
	res.send("Server is ready")
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

//POST /api/users - register a user
//POST /api/users/auth authenticate a user and get a token
//POST /api/users/logout log out and clear cookies
//Get /api/users/users/profile get a user profile
//Put /api/users/profile update a user profile
