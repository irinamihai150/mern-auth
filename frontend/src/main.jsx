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
import RegisterScreen from "./screens/RegisterScreen.jsx"
import store from "./store.js"
import PrivateRoute from "./components/PrivateRoute.jsx"
import { Provider } from "react-redux"
import ProfileScreen from "./screens/ProfileScreen.jsx"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />}></Route>
			<Route path='/login' element={<LoginScreen />}></Route>
			<Route path='/register' element={<RegisterScreen />}></Route>
			{/* private route */}
			<Route path='' element={<PrivateRoute />}>
				<Route path='/profile' element={<ProfileScreen />}></Route>
			</Route>
		</Route>
	)
)
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
)
