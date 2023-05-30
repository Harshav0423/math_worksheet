import styles from "./selection1.module.css";
import Tooltip from "@mui/material/Tooltip";
import { ChangeEvent, useEffect, useState } from "react";
export default function ({ selectionObject, selectionFunction }) {

	// useEffect(() => {
	// 	console.log("selection1", selectionFunction, selectionObject)
	// }, [])

	let [noOfProblems, setNoOfProblems] = useState(50);
	let [minNumber, setMinNumber] = useState(100);
	let [maxNumber, setMaxNumber] = useState(1000);
	let [timePerProblem, setTimerPerProblem] = useState(60);
	let [minutes, setMinutes] = useState(1);
	let [seconds, setSeconds] = useState(0);


	useEffect(() => {
		setNoOfProblems(noOfProblems);
		selectionFunction.setNoOfProblems(noOfProblems);
		setMinNumber(minNumber);
		selectionFunction.setMinNumber(minNumber);
		setMaxNumber(maxNumber);
		selectionFunction.setMaxNumber(maxNumber);
		setTimerPerProblem(timePerProblem);
		selectionFunction.setTimePerProblem(timePerProblem);
		setMinutes(minutes);
		setSeconds(seconds);
	}, [noOfProblems, minNumber, maxNumber, timePerProblem, seconds, minutes]);

	function onValueChange(
		value,
		func,
		increment
	) {
		if (increment) {
			func(value + 1);
		} else {
			func(value - 1);
		}
	}
	async function onTimeChange(
		value,
		func,
		increment
	) {
		if (increment) {
			func(value + 10);
		} else {
			func(value - 10);
		}
		var mins = Math.floor(value / 60);
		var secs = value - mins * 60;
		setMinutes(mins);
		setSeconds(secs);
	}
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.namelabel}>Number of Problems :</div>
				<div className={styles.selectiondiv}>
					<div className={styles.value}>{noOfProblems}</div>
					<div className={styles.icon}>
						<div
							className={styles.iconup}
							onClick={() => {
								onValueChange(noOfProblems, setNoOfProblems, true);
							}}
						></div>
						<div
							className={styles.icondown}
							onClick={() => {
								onValueChange(noOfProblems, setNoOfProblems, false);
							}}
						></div>
					</div>
				</div>
				<div className={styles.namelabel}>Min :</div>
				<div className={styles.selectiondiv}>
					<div className={styles.value}>{minNumber}</div>
					<div className={styles.icon}>
						<div
							className={styles.iconup}
							onClick={() => {
								onValueChange(minNumber, setMinNumber, true);
							}}
						></div>
						<div
							className={styles.icondown}
							onClick={() => {
								onValueChange(minNumber, setMinNumber, false);
							}}
						></div>
					</div>
				</div>
				<div className={styles.namelabel}>Max :</div>
				<div className={styles.selectiondiv}>
					<div className={styles.value}>{maxNumber}</div>
					<div className={styles.icon}>
						<div
							className={styles.iconup}
							onClick={() => {
								onValueChange(maxNumber, setMaxNumber, true);
							}}
						></div>
						<div
							className={styles.icondown}
							onClick={() => {
								onValueChange(maxNumber, setMaxNumber, false);
							}}
						></div>
					</div>
				</div>
				<div className={styles.namelabel}>Time Per Problem :</div>
				<div className={styles.selectiondiv}>
					<div className={styles.value}>
						{`${minutes}: ${seconds < 10 ? "0" + seconds : seconds}sec`}
					</div>
					<div className={styles.icon}>
						<div
							className={styles.iconup}
							onClick={async () => {
								await onTimeChange(timePerProblem, setTimerPerProblem, true);
							}}
						></div>
						<div
							className={styles.icondown}
							onClick={async () => {
								await onTimeChange(timePerProblem, setTimerPerProblem, false);
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
