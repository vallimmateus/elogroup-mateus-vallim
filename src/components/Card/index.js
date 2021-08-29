import React from "react";
import "./style.css";
import { FaPencilAlt } from "react-icons/fa";

function Card() {
	return (
		<div className="card">
			<div className="title">
				<p>Isto vai ser um card uma hora</p>
			</div>
			<div className="info">
				<p>email: contato@teste.com</p>
				<p>telefone: (11) 11111-1111</p>
			</div>
			<div className="oportunidades">
				<div className="bpm">
					<p>BPM</p>
				</div>
				<div className="prod-dig">
					<p>Produto Digital</p>
				</div>
				<div className="analytics">
					<p>Analytics</p>
				</div>
				<div className="rpa">
					<p>RPA</p>
				</div>
			</div>
			<div className="border-bottom"></div>
			<div className="edit">
				<FaPencilAlt />
			</div>
		</div>
	);
}

export default Card;
