import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/logo.svg";

function Header() {
	return (
		<header>
			<div>
				<img src={Logo} alt="EloGroup" />
			</div>
			<h1>Painel de Leads</h1>
			<p>
				mateus.vallim@usp.br | <Link to="/">Sair</Link>
			</p>
		</header>
	);
}

export default Header;
