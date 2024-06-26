export default function CreateBoxes() {
	let boardBoxes = {
		NW: {
			0: { coord: { x: 0, y: 0 }, value: 0 },
			1: { coord: { x: 1, y: 0 }, value: 0 },
			2: { coord: { x: 2, y: 0 }, value: 0 },
			3: { coord: { x: 0, y: 1 }, value: 0 },
			4: { coord: { x: 1, y: 1 }, value: 0 },
			5: { coord: { x: 2, y: 1 }, value: 0 },
			6: { coord: { x: 0, y: 2 }, value: 0 },
			7: { coord: { x: 1, y: 2 }, value: 0 },
			8: { coord: { x: 2, y: 2 }, value: 0 },
		},
		N: {
			0: { coord: { x: 3, y: 0 }, value: 0 },
			1: { coord: { x: 4, y: 0 }, value: 0 },
			2: { coord: { x: 5, y: 0 }, value: 0 },
			3: { coord: { x: 3, y: 1 }, value: 0 },
			4: { coord: { x: 4, y: 1 }, value: 0 },
			5: { coord: { x: 5, y: 1 }, value: 0 },
			6: { coord: { x: 3, y: 2 }, value: 0 },
			7: { coord: { x: 4, y: 2 }, value: 0 },
			8: { coord: { x: 5, y: 2 }, value: 0 },
		},
		NE: {
			0: { coord: { x: 6, y: 0 }, value: 0 },
			1: { coord: { x: 7, y: 0 }, value: 0 },
			2: { coord: { x: 8, y: 0 }, value: 0 },
			3: { coord: { x: 6, y: 1 }, value: 0 },
			4: { coord: { x: 7, y: 1 }, value: 0 },
			5: { coord: { x: 8, y: 1 }, value: 0 },
			6: { coord: { x: 6, y: 2 }, value: 0 },
			7: { coord: { x: 7, y: 2 }, value: 0 },
			8: { coord: { x: 8, y: 2 }, value: 0 },
		},
		W: {
			0: { coord: { x: 0, y: 3 }, value: 0 },
			1: { coord: { x: 1, y: 3 }, value: 0 },
			2: { coord: { x: 2, y: 3 }, value: 0 },
			3: { coord: { x: 0, y: 4 }, value: 0 },
			4: { coord: { x: 1, y: 4 }, value: 0 },
			5: { coord: { x: 2, y: 4 }, value: 0 },
			6: { coord: { x: 0, y: 5 }, value: 0 },
			7: { coord: { x: 1, y: 5 }, value: 0 },
			8: { coord: { x: 2, y: 5 }, value: 0 },
		},
		C: {
			0: { coord: { x: 3, y: 3 }, value: 0 },
			1: { coord: { x: 4, y: 3 }, value: 0 },
			2: { coord: { x: 5, y: 3 }, value: 0 },
			3: { coord: { x: 3, y: 4 }, value: 0 },
			4: { coord: { x: 4, y: 4 }, value: 0 },
			5: { coord: { x: 5, y: 4 }, value: 0 },
			6: { coord: { x: 3, y: 5 }, value: 0 },
			7: { coord: { x: 4, y: 5 }, value: 0 },
			8: { coord: { x: 5, y: 5 }, value: 0 },
		},
		E: {
			0: { coord: { x: 6, y: 3 }, value: 0 },
			1: { coord: { x: 7, y: 3 }, value: 0 },
			2: { coord: { x: 8, y: 3 }, value: 0 },
			3: { coord: { x: 6, y: 4 }, value: 0 },
			4: { coord: { x: 7, y: 4 }, value: 0 },
			5: { coord: { x: 8, y: 4 }, value: 0 },
			6: { coord: { x: 6, y: 5 }, value: 0 },
			7: { coord: { x: 7, y: 5 }, value: 0 },
			8: { coord: { x: 8, y: 5 }, value: 0 },
		},
		SW: {
			0: { coord: { x: 0, y: 6 }, value: 0 },
			1: { coord: { x: 1, y: 6 }, value: 0 },
			2: { coord: { x: 2, y: 6 }, value: 0 },
			3: { coord: { x: 0, y: 7 }, value: 0 },
			4: { coord: { x: 1, y: 7 }, value: 0 },
			5: { coord: { x: 2, y: 7 }, value: 0 },
			6: { coord: { x: 0, y: 8 }, value: 0 },
			7: { coord: { x: 1, y: 8 }, value: 0 },
			8: { coord: { x: 2, y: 8 }, value: 0 },
		},
		S: {
			0: { coord: { x: 3, y: 6 }, value: 0 },
			1: { coord: { x: 4, y: 6 }, value: 0 },
			2: { coord: { x: 5, y: 6 }, value: 0 },
			3: { coord: { x: 3, y: 7 }, value: 0 },
			4: { coord: { x: 4, y: 7 }, value: 0 },
			5: { coord: { x: 5, y: 7 }, value: 0 },
			6: { coord: { x: 3, y: 8 }, value: 0 },
			7: { coord: { x: 4, y: 8 }, value: 0 },
			8: { coord: { x: 5, y: 8 }, value: 0 },
		},
		SE: {
			0: { coord: { x: 6, y: 6 }, value: 0 },
			1: { coord: { x: 7, y: 6 }, value: 0 },
			2: { coord: { x: 8, y: 6 }, value: 0 },
			3: { coord: { x: 6, y: 7 }, value: 0 },
			4: { coord: { x: 7, y: 7 }, value: 0 },
			5: { coord: { x: 8, y: 7 }, value: 0 },
			6: { coord: { x: 6, y: 8 }, value: 0 },
			7: { coord: { x: 7, y: 8 }, value: 0 },
			8: { coord: { x: 8, y: 8 }, value: 0 },
		},
	};
	return boardBoxes;
}
