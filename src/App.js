import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthContextProvider } from "./store/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<h1 className="text-center text-3xl font-bold">
				Firebase Auth and Context
			</h1>
			<Navbar />
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route path="/signin" element={<SignIn />} />
					<Route path="*" element={<SignIn />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
