import React from "react"
import ReactDOM from "react-dom/client"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import HomeScreen from "./screens/HomeScreen.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />}></Route>
			<Route path='/login' element={<LoginScreen />}></Route>
		</Route>
	)
)
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
)
