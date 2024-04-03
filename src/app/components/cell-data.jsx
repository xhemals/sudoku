"use client";
function handleInputChange(e, box, index, boardBoxes, recursionDepth = 0) {
	const newValue = e.target.value;
	e.target.classList.remove("correct");
	e.target.classList.remove("incorrect");
	if (newValue.length == 1 && !isNaN(newValue)) {
		if (newValue == boardBoxes[box][index]["value"]) {
			e.target.classList.add("correct");
		} else {
			e.target.classList.add("incorrect");
		}
	}
}

function placeCaretAtEnd(el) {
	el.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		const range = document.createRange();
		range.selectNodeContents(el);
		range.collapse(false);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (typeof document.body.createTextRange != "undefined") {
		const textRange = document.body.createTextRange();
		textRange.moveToElementText(el);
		textRange.collapse(false);
		textRange.select();
	}
}

export default function CellData({ value, box, index, boardBoxes }) {
	return (
		// <td type="number" id={box + index} contentEditable={value === ""} className={`${value === "" ? "editable" : "not-editable"}`} onInput={(e) => handleInputChange(e, box, index, boardBoxes)}>
		// 	{value === "" ? null : value}
		// </td>
		<td id={box + index} className={`${value === "" ? "editable" : "not-editable"}`}>
			{value === "" ? (
				<input
					type="number"
					onInput={(e) => {
						if (e.target.value.length > 1) {
							e.target.value = e.target.value.slice(-1);
						}
						handleInputChange(e, box, index, boardBoxes);
					}}
					onKeyDown={(e) => {
						if (!["1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].includes(e.key)) {
							e.preventDefault();
						}
					}}
				/>
			) : (
				value
			)}
		</td>
	);
}
