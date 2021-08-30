import React, { useState } from "react";
import TextField from "./TextField";
import { Link } from "react-router-dom";

export default function Login({ toggle }) {
	// eslint-disable-next-line
	const [user, setUser] = useState("");
	// eslint-disable-next-line
	const [pass, setPass] = useState("");
	return (
		<form>
			<TextField name="Usuário" required onChange={setUser} />
			<TextField name="Senha" required onChange={setPass} />
			<Link to="/home">
				<input
					type="button"
					value="Login"
					// onClick={() => {
					// 	console.log("user", user);
					// 	console.log("pass", pass);
					// }}
				/>
			</Link>
			<input
				type="button"
				value="Register"
				onClick={() => {
					toggle(true);
				}}
			/>
		</form>
	);
}
