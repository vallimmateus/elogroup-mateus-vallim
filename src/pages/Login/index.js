import React from "react";
import "./style.css";
import Logo from "../../images/logo.svg";
import TextField from "../../components/TextField/index";

export default function Login() {
	return (
		<div className="container">
			<img src={Logo} alt="EloGroup Logo" />
			<form>
				<TextField name="Usuário" required />
				<TextField name="Senha" required />
				<input type="submit" value="Login" />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}
