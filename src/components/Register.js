import React from "react";
import TextField from "./TextField";

export default function Login() {
	return (
		<form>
			<TextField name="Usuário" required />
			<TextField name="Senha" required />
			<TextField name="Confirme a senha" required />
			<input
				type="submit"
				value="Register"
				style={{ backgroundColor: "#ea4f3e" }}
			/>
		</form>
	);
}
