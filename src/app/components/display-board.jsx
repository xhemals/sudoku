import CreateBoard from "./create-board";
import "../css/display-board.scss";

export default function DisplayBoard() {
	let boardBoxes = CreateBoard();
	let displayedBoard = boardBoxes;

	function setRandomValuesToDash() {
		let count = 0;
		while (count < 35) {
			let randomBoxKey =
				Object.keys(displayedBoard)[
					Math.floor(Math.random() * Object.keys(displayedBoard).length)
				];
			let randomItemKey = Object.keys(displayedBoard[randomBoxKey])[
				Math.floor(
					Math.random() * Object.keys(displayedBoard[randomBoxKey]).length
				)
			];
			if (displayedBoard[randomBoxKey][randomItemKey].value !== "") {
				displayedBoard[randomBoxKey][randomItemKey].value = "";
				count++;
			}
		}
	}

	setRandomValuesToDash();

	return (
		<table className="sudoku-board">
			<tbody>
				{Object.keys(displayedBoard).map((box, boxIndex) => {
					if (boxIndex % 3 === 0) {
						return (
							<tr key={boxIndex}>
								{Object.keys(displayedBoard)
									.slice(boxIndex, boxIndex + 3)
									.map((box) => (
										<td className="box" key={box}>
											<table>
												<tbody>
													{Object.values(displayedBoard[box]).map(
														(value, index) => {
															if (index % 3 === 0) {
																return (
																	<tr key={index}>
																		<td
																			contentEditable={
																				displayedBoard[box][index].value === ""
																			}
																			className={
																				displayedBoard[box][index].value === ""
																					? "editable"
																					: "not-editable"
																			}
																		>
																			{displayedBoard[box][index].value}
																		</td>
																		<td
																			contentEditable={
																				displayedBoard[box][index + 1].value ===
																				""
																			}
																			className={
																				displayedBoard[box][index + 1].value ===
																				""
																					? "editable"
																					: "not-editable"
																			}
																		>
																			{displayedBoard[box][index + 1].value}
																		</td>
																		<td
																			contentEditable={
																				displayedBoard[box][index + 2].value ===
																				""
																			}
																			className={
																				displayedBoard[box][index + 2].value ===
																				""
																					? "editable"
																					: "not-editable"
																			}
																		>
																			{displayedBoard[box][index + 2].value}
																		</td>
																	</tr>
																);
															}
															return null;
														}
													)}
												</tbody>
											</table>
										</td>
									))}
							</tr>
						);
					}
					return null;
				})}
			</tbody>
		</table>
	);
}
