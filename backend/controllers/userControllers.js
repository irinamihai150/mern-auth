import asyncHandler from "express-async-handler"

//description Auth user/set token
//route POST api/users/auth
//@access Public

const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Auth User" })
})

//description register a new user
//route POST api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Register User" })
})

//description Logout user
//route POST api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Logout User" })
})

//description get user profile
//route GET api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "User Profile" })
})

//description update user profile
//route PUT api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Update User" })
})
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
