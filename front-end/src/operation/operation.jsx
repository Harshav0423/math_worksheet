import { useState, ChangeEvent } from "react";
import styles from "./operation.module.css";
export default function Operation( {typeOfOperation, setTypeOfOperation}) {
	let operators = ["Addition", "Subtraction", "Multiplication", "Division"];
	function onValueChange(event) {
		setTypeOfOperation(event.target.value);
	}
	return (
		<div>
			<div className={styles.title}>Choose Operation</div>

			{operators &&
				operators.map((operator) => (
					<div className={styles.content}>
						<input
							type="radio"
							id={operator.toLocaleLowerCase()}
							value={operator.toLocaleLowerCase()}
							onChange={(e) => {
								onValueChange(e);
							}}
							checked={typeOfOperation === operator.toLocaleLowerCase()}
						/>
						<label
							htmlFor={operator.toLocaleLowerCase()}
							className={styles.box}
						>
							<div className={styles.plan}>
								<div className={styles.name}>{operator}</div>
								<div className={`${styles.circle}} ${styles.checked}`}></div>
							</div>
						</label>
					</div>
				))}
		</div>
	);
}
