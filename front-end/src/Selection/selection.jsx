import { useEffect, useState } from "react";
import Operation from "../operation/operation";
import Selection1 from "../selection1/selection1";
import styles from "./selection.module.css";

function Selection({selectionObject, selectionFunction, operation, setOperation}) {
	
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<span className={styles.maintitle}>Math Worksheets</span>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottomleft}>
					<Operation typeOfOperation={operation} setTypeOfOperation={setOperation} ></Operation>
				</div>
				<div className={styles.bottomright}>
					<Selection1 selectionObject={selectionObject} selectionFunction={selectionFunction}></Selection1>
				</div>
			</div>
		</div>
	);
}

export default Selection;
