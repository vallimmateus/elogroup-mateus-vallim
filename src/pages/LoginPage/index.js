import React from "react";
import "./style.css";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Logo from "../../images/logo.svg";

export default function LoginPage() {
	var register = false;

	return (
		<div className="container">
			<img src={Logo} alt="EloGroup Logo" />
			{register ? <Register /> : <Login />}
		</div>
	);
}
