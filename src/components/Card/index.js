import React from "react";
import "./style.css";
import { FaPencilAlt } from "react-icons/fa";

function Card({ content, types }) {
	return (
		<div className="card">
			<div className="title">
				<p>{content.name}</p>
			</div>
			<div className="info">
				<p>email: {content.email}</p>
				<p>telefone: {content.phone}</p>
			</div>
			<div className="oportunidades">
				{types.includes("BPM") ? (
					<div className="bpm">
						<p>BPM</p>
					</div>
				) : (
					""
				)}
				{types.includes("Produto Digital") ? (
					<div className="prod-dig">
						<p>Produto Digital</p>
					</div>
				) : (
					""
				)}
				{types.includes("Analytics") ? (
					<div className="analytics">
						<p>Analytics</p>
					</div>
				) : (
					""
				)}
				{types.includes("RPA") ? (
					<div className="rpa">
						<p>RPA</p>
					</div>
				) : (
					""
				)}
			</div>
			<div className="border-bottom"></div>
			<div className="edit">
				<FaPencilAlt />
			</div>
		</div>
	);
}

export default Card;
