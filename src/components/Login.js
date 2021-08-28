import React from "react";
import TextField from "./TextField";

export default function Login() {
	return (
		<form>
			<TextField name="Usuário" required />
			<TextField name="Senha" required />
			<input type="submit" value="Login" />
			<input type="button" value="Register" onClick={() => {}} />
		</form>
	);
}
