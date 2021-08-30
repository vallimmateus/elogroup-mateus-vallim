import React, { useState } from "react";
import "./style.css";
import Card from "../../components/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { FaPlus } from "react-icons/fa";
import NewCard from "../../components/NewCard";

const cardsFromBackend = [
	{
		id: uuid(),
		content: {
			name: "Organizações Internacionais",
			email: "contato@organizacoesinternacionais.org",
			phone: "(11) 11111-1111",
		},
		types: ["BPM", "Analytics"],
	},
	{
		id: uuid(),
		content: {
			name: "Musc. Sound Live Cmp",
			email: "contato@muscsound.com",
			phone: "(11) 11111-1111",
		},
		types: ["Analytics", "RPA"],
	},
	{
		id: uuid(),
		content: {
			name: "Ind. Farm. LTDA",
			email: "contato@indfarm.com",
			phone: "(11) 11111-1111",
		},
		types: ["Produto Digital"],
	},
	{
		id: uuid(),
		content: {
			name: "Mateus Vallim",
			email: "mateus.vallim@gmail.com",
			phone: "(11) 11111-1111",
		},
		types: ["RPA"],
	},
];

const columnsFromBackend = {
	[uuid()]: {
		name: "Cliente em Potencial",
		cards: cardsFromBackend,
	},
	[uuid()]: {
		name: "Dados Confirmados",
		cards: [],
	},
	[uuid()]: {
		name: "Reunião Agendada",
		cards: [],
	},
};

const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;
	console.log();
	//[result.destination.droppableId]);

	if (source.droppableId !== destination.droppableId) {
		const sourceIndex = Object.entries(columns).findIndex(
			(c) => c[0] === source.droppableId
		);
		const destinationIndex = Object.entries(columns).findIndex(
			(c) => c[0] === destination.droppableId
		);
		if (sourceIndex > destinationIndex) return;
		const sourceColumn = columns[source.droppableId];
		const destinationColumn = columns[destination.droppableId];
		const sourceCards = [...sourceColumn.cards];
		const destinationCards = [...destinationColumn.cards];
		const [remove] = sourceCards.splice(source.index, 1);
		destinationCards.splice(destination.index, 0, remove);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				cards: sourceCards,
			},
			[destination.droppableId]: {
				...destinationColumn,
				cards: destinationCards,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const [remove] = column.cards.splice(source.index, 1);
		column.cards.splice(destination.index, 0, remove);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				cards: column.cards,
			},
		});
	}
};

export default function Home() {
	const [columns, setColumns] = useState(columnsFromBackend);
	const [popup, setPopup] = useState(false);
	// eslint-disable-next-line
	const [nome, setNome] = useState("");
	// eslint-disable-next-line
	const [phone, setPhone] = useState("");
	// eslint-disable-next-line
	const [email, setEmail] = useState("");

	return (
		<div className="home">
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
			>
				<table>
					<thead>
						<tr>
							{Object.entries(columns).map(([id, column]) => {
								return <td key={id}>{column.name}</td>;
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							{Object.entries(columns).map(([id, column]) => {
								return (
									<Droppable droppableId={id} key={id}>
										{(provided, snapshot) => {
											return (
												<td
													className="column"
													{...provided.droppableProps}
													ref={provided.innerRef}
													style={{
														backgroundColor:
															snapshot.isDraggingOver
																? "#24506C33"
																: "transparent",
													}}
												>
													{column.cards.map(
														(card, index) => {
															return (
																<Draggable
																	key={
																		card.id
																	}
																	draggableId={
																		card.id
																	}
																	index={
																		index
																	}
																>
																	{(
																		provided
																	) => {
																		return (
																			<div
																				ref={
																					provided.innerRef
																				}
																				{...provided.draggableProps}
																				{...provided.dragHandleProps}
																				style={{
																					width: "100%",
																					...provided
																						.draggableProps
																						.style,
																				}}
																			>
																				<Card
																					content={
																						card.content
																					}
																					types={
																						card.types
																					}
																				/>
																			</div>
																		);
																	}}
																</Draggable>
															);
														}
													)}
													{provided.placeholder}
												</td>
											);
										}}
									</Droppable>
								);
							})}
						</tr>
					</tbody>
					<div className="add" onClick={() => setPopup(true)}>
						<FaPlus />
					</div>
				</table>
			</DragDropContext>
			<div className="tutorial">
				<h2>Como utilizar</h2>
				<p>
					Para utilizar o <b>Painel de Leads</b> você deverá primeiro
					adicionar um lead no botão "+", no canto inferior esquerdo
					da tela. Um popup aparecerá para que você preencha os dados
					do lead. Ao concluir clique em "Adicionar".
				</p>
				<p>
					Cada lead adicionado aparecerá na forma de card na coluna
					"Cliente em Potencial" e você poderá arrastá-lo para{" "}
					<b>cima</b> e para <b>baixo</b>, de modo a ordenar a lista
					de leads e para a <b>direita</b> quando o próximo passo for
					realizado.
				</p>
				<p>
					<b>
						Não será possível arrastar um card para o lado esquerdo!
					</b>{" "}
					Tenha certeza ao arrastar algum.
				</p>
			</div>
			<NewCard
				trigger={popup}
				open={setPopup}
				sets={[setNome, setPhone, setEmail]}
			/>
		</div>
	);
}
