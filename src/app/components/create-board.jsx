import CreateBoxes from "./board-boxes";

let boardBoxes = {};

function scrambleBox() {
	boardBoxes = CreateBoxes();
	let boxesToScramble = ["NW", "C", "SE"];
	for (let box in boxesToScramble) {
		let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let scrambled = [];
		let keys = Object.keys(boardBoxes[boxesToScramble[box]]);
		while (nums.length > 0) {
			let index = Math.floor(Math.random() * nums.length);
			scrambled.push(nums[index]);
			nums.splice(index, 1);
		}
		for (let i = 0; i < keys.length; i++) {
			boardBoxes[boxesToScramble[box]][keys[i]].value = scrambled[i];
		}
	}
	solveSudoku();
}

function solveSudoku() {
	for (let box in boardBoxes) {
		for (let key in boardBoxes[box]) {
			if (boardBoxes[box][key].value === 0) {
				for (let num = 1; num <= 9; num++) {
					let coordX = boardBoxes[box][key].coord.x;
					let coordY = boardBoxes[box][key].coord.y;
					let { foundX, foundY } = findValues(coordX, coordY);
					if (
						!foundX.includes(num) &&
						!foundY.includes(num) &&
						!isInBox(box, num)
					) {
						boardBoxes[box][key].value = num;
						if (solveSudoku()) {
							return true;
						}
						boardBoxes[box][key].value = 0;
					}
				}
				return false;
			}
		}
	}
	return true;
}

function isInBox(box, num) {
	for (let key in boardBoxes[box]) {
		if (boardBoxes[box][key].value === num) {
			return true;
		}
	}
	return false;
}

function findValues(coordX, coordY) {
	let foundX = [];
	let foundY = [];

	for (let box in boardBoxes) {
		for (let key in boardBoxes[box]) {
			let coord = boardBoxes[box][key].coord;
			if (coord.x === coordX) {
				foundX.push(boardBoxes[box][key].value);
			}
			if (coord.y === coordY) {
				foundY.push(boardBoxes[box][key].value);
			}
		}
	}
	return { foundX, foundY };
}

export default function CreateBoard() {
	scrambleBox();
	return boardBoxes;
}
