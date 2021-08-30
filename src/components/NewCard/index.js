import React, { useState } from "react";
import "./style.css";
import TextField from "../TextField";
import { FaTimes } from "react-icons/fa";

function NewCard(props) {
	const [nome, setNome] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	return props.trigger ? (
		<div className="popup">
			<div>
				<h2>Adicionar Lead</h2>
				<form>
					<div>
						<TextField name="Nome" required onChange={setNome} />
						<TextField name="Telefone" onChange={setPhone} />
						<TextField name="Email" onChange={setEmail} />
					</div>
					<div className="checkbox">
						<TextField name="RPA" type="checkbox" />
						<TextField name="Produto Digital" type="checkbox" />
						<TextField name="Analytics" type="checkbox" />
						<TextField name="BPM" type="checkbox" />
					</div>
				</form>
				<FaTimes className="close" onClick={() => props.open(false)} />
				<div className="button">
					<button>Adicionar</button>
				</div>
			</div>
		</div>
	) : (
		""
	);
}

export default NewCard;
