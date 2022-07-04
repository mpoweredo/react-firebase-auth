import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../store/AuthContext";

const Account = () => {
	const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
        
    }

	return (
		<div className="max-w-[600px] mx-auto my-16 p-4">
			<h1 className="text-2xl font-bold py-4">Account</h1>
			<p>user email: {user && user.email}</p>
			<button onClick={logoutHandler} className="hover:bg-blue-500 border p-3 bg-blue-600 w-full mt-5 text-white">
				Logout
			</button>
		</div>
	);
};

export default Account;
