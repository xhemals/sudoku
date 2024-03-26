import Image from "next/image";
// import styles from "./page.module.css";
import CreateBoard from "./components/create-board";
import DisplayBoard from "./components/display-board";

export default function Home() {
	return (
		// <main className={styles.main}>
		<main>
			{/* <div className={styles.description}> */}
			<div>
				<h1>Sudoku</h1>
				<br />
				<br />
				<DisplayBoard />
			</div>
		</main>
	);
}
