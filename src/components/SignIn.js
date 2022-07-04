import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../store/AuthContext";

const SignIn = () => {
	const { signIn } = UserAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const submitHandler = async (event) => {
		event.preventDefault();
		setError("");
		try {
			await signIn(email, password);
			navigate("/account");
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
				<p className="py-2">
					Don't have an account yet?{" "}
					<Link to="/signup" className="underline">
						Sign up
					</Link>
					.
				</p>
			</div>
			<form onSubmit={submitHandler}>
      <div className="flex flex-col py-2">
					<label className="py-2 font-medium" htmlFor="email">
						Email Address
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className="border p-3"
						type="email"
						id="email"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium" htmlFor="password">
						Password
					</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className="border p-3"
						type="password"
						id="password"
					/>
				</div>
				<button className="hover:bg-blue-500 border p-3 bg-blue-600 w-full text-white">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default SignIn;
