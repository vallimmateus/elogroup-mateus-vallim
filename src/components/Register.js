import React, { useState } from "react";
import TextField from "./TextField";

export default function Login() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [passVerify, setPassVerify] = useState("");

	const onSubmit = (e) => {
		let state = {
			user: user,
			pass: pass,
			passVerify: passVerify,
		};
		let oldData = localStorage.getItem("formdata");
		if ((oldData = null)) {
			oldData = [];
			oldData.push(state);
			localStorage.setItem("formdata", JSON.stringify(oldData));
		} else {
			let oldArr = JSON.parse(oldData);
			oldArr.push(state);
			localStorage.setItem("formdata", JSON.stringify(oldArr));
			console.log(oldArr, "hhg");
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<TextField name="Usuário" required onChange={setUser} />
			<TextField name="Senha" required onChange={setPass} />
			<TextField
				name="Confirme a senha"
				required
				onChange={setPassVerify}
			/>
			<input
				type="submit"
				value="Register"
				style={{ backgroundColor: "var(--primary)" }}
			/>
		</form>
	);
}
