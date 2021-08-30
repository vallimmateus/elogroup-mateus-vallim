import React from "react";
import "./style.css";

function TextField({
	name = "label",
	placeholder = "",
	required = false,
	onChange,
	type = "text",
}) {
	return (
		<div className="field">
			<label htmlFor={name}>
				{name}
				{required ? " *" : ""}
			</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				onChange={(e) => {
					if (!type === "checkbox") {
						onChange(e.target.value);
					}
				}}
			/>
		</div>
	);
}

export default TextField;
