import CreateBoard from "./create-board";
import "../css/display-board.scss";
import CellData from "./cell-data";

export default function DisplayBoard() {
	let boardBoxes = CreateBoard();
	let displayedBoard = JSON.parse(JSON.stringify(boardBoxes));

	function setRandomValuesToDash() {
		let count = 0;
		while (count < 35) {
			let randomBoxKey = Object.keys(displayedBoard)[Math.floor(Math.random() * Object.keys(displayedBoard).length)];
			let randomItemKey = Object.keys(displayedBoard[randomBoxKey])[Math.floor(Math.random() * Object.keys(displayedBoard[randomBoxKey]).length)];
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
													{Object.values(displayedBoard[box]).map((value, index) => {
														if (index % 3 === 0) {
															return (
																<tr key={index}>
																	<CellData value={displayedBoard[box][index].value} box={box} index={index} boardBoxes={boardBoxes} />
																	<CellData value={displayedBoard[box][index + 1].value} box={box} index={index + 1} boardBoxes={boardBoxes} />
																	<CellData value={displayedBoard[box][index + 2].value} box={box} index={index + 2} boardBoxes={boardBoxes} />
																</tr>
															);
														}
														return null;
													})}
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
