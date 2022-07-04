import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
    const navigate = useNavigate()

	const { createUser } = UserAuth();

	const submitHandler = async (e) => {
        e.preventDefault();
		setError("");
		try {
			await createUser(email, password);
            navigate('/account')
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">Sign up for free</h1>
				<p className="py-2">
					Already have an account yet?{" "}
					<Link to="/" className="underline">
						Sign in
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
				<button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
