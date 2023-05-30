import styles from "./options.module.css";
function Options() {
	let tasks = [
		"Addition",
		"Subtraction",
		"Multiplication",
		"Division",
		"Multiplication Tables",
		"Squared",
		"Square Roots",
	];
	return (
		<div className={styles.container}>
			{tasks &&
				tasks.map((task) => (
					<div className={styles.content}>
						<label htmlFor={task.toLocaleLowerCase()} className={styles.box}>
							<div className={styles.plan}>
								<span className={styles.name}>{task}</span>
							</div>
						</label>
					</div>
				))}
		</div>
	);
}

export default Options;
