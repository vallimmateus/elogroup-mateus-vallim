import React from "react";
import "./style.css";

function TextField({ name = "label", placeholder = "", required = false }) {
	return (
		<div className="field">
			<label htmlFor={name}>
				{name}
				{required ? " *" : ""}
			</label>
			<input
				type="text"
				name={name}
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
}

export default TextField;
