import React, { useState } from "react";
import "./style.css";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Logo from "../../images/logo.svg";
import { FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
	const [register, setRegister] = useState(false);

	return (
		<div className="container">
			{register ? (
				<FaArrowLeft
					onClick={() => {
						setRegister(false);
					}}
				/>
			) : (
				<></>
			)}
			<img src={Logo} alt="EloGroup Logo" />
			{register ? <Register /> : <Login toggle={setRegister} />}
		</div>
	);
}
