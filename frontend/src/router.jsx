import React from "react"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import App from "./App.jsx"
import HomeScreen from "./screens/HomeScreen.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"
import RegisterScreen from "./screens/RegisterScreen.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx"
import ProfileScreen from "./screens/ProfileScreen.jsx"

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />}></Route>
			<Route path='/login' element={<LoginScreen />}></Route>
			<Route path='/register' element={<RegisterScreen />}></Route>

			<Route path='' element={<PrivateRoute />}>
				<Route path='/profile' element={<ProfileScreen />}></Route>
			</Route>
		</Route>
	)
)
