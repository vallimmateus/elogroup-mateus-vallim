import React from "react";
import "./style.css";
import Card from "../../components/Card";

export default function Home() {
	return (
		<div className="home">
			<table>
				<th>
					<td>Cliente em Potencial</td>
					<td>Dados Confirmados</td>
					<td>Reunião Agendada</td>
				</th>
				<tr>
					<td>
						<Card />
					</td>
					<td></td>
					<td></td>
				</tr>
			</table>
			<div>
				<h2>Tutorial</h2>
				<p>Use como quiser, por enquanto</p>
			</div>
		</div>
	);
}
