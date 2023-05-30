import { useEffect, useRef, useState } from "react";
import "./problem.css";
import { getProblems } from "../../api/apis/api";
import SubProblem from "./subproblem";
import Counter from "./counter";

export default function Problem({ payload, selectionObject }) {


	const [typeOfOperation, setTypeOfOperation] = useState(null);
	const [firstOperands, setFirstOperands] = useState([]);
	const [secondOperands, setSecondOperands] = useState([]);
	const [totalResult, setTotalResult] = useState([]);
	const [noOfProblems, setNoOfProblems] = useState(null);
	const [timePerProblem, setTimePerProblem] = useState(null);
	const [minutes, setMinutes] = useState(null);
	const [seconds, setSeconds] = useState(null);
	// const [displayResult, setDisplayResult] = useState(false);
	const [enterValue, setEnterValue] = useState(null);
	const [isDone, setIsDone] = useState(0);
	const [incrementIndex, setIncrementIndex] = useState(0);
	const [goToNextOne, setGoToIndex] = useState(0);
	const [counter, setCounter] = useState(0);
	const [timerDone, setTimerDone] = useState(0);
	const [invokeCounter, setInvokeCounter] = useState(0);
	const [displayResult, setDisplayResult] = useState(false);

	useEffect(() => {

		setTypeOfOperation(payload.operation)
		setNoOfProblems(payload.noOfProblems);
		setTimePerProblem(payload.timePerProblem);
		setCounter(payload.timePerProblem);
		setFirstOperands(payload.firstOperand);
		setSecondOperands(payload.secondOperand);
		setTotalResult(payload.results);

		console.log("problems", typeOfOperation, noOfProblems, timePerProblem, firstOperands, secondOperands, totalResult)
	}, [typeOfOperation, noOfProblems, timePerProblem, firstOperands, secondOperands, totalResult]);

	useEffect(() => {
		// if (counter > 0) {
		// 	setCounter(prev => prev - 1);
		// }
		console.log("counter value", counter)
		if (counter > 0) {
			console.log("timer started", isDone)
			const tmr = setTimeout(() => {
				setCounter(prev => prev - 1);
			}, 1000);

			return () => clearTimeout(tmr);
		}
		else {
			console.log("timer is done", counter, isDone)
			// setDisplayResult(true);
			// setGoToIndex(prev => prev + 1);
			// setCounter(payload.timePerProblem);
			// setDisplayResult(false);
			setIsDone(prev=>prev+1)
		}

	}, [invokeCounter]);


	const booleanArray = new Array(noOfProblems).fill(false);
	const displayResultArray = new Array(noOfProblems).fill(false);
	booleanArray[isDone] = true;

	// function validateAnswer(event, idx) {
	// 	console.log(typeof enterValue, (totalResult[idx] - enterValue) === 0, typeof totalResult[idx]);
	// 	if ((totalResult[idx] - enterValue) === 0) {
	// 		setDisplayResult(true);
	// 		displayResultArray[idx] = true;
	// 		console.log(displayResultArray[idx]);
	// 		booleanArray[idx] = true;
	// 	}
	// }
	useEffect(() => {
		console.log("go to next one", "timerDone", timerDone);

		// displayResultArray[isDone] = true;
		// booleanArray[isDone] = true;
		setGoToIndex(prev => prev + 1);
		setCounter(payload.timePerProblem);
		console.log("go to next one", isDone, "timerDone", displayResultArray);
		setDisplayResult(false);
	}, [isDone, timerDone])

	return (
		<div className="container">
			{noOfProblems && Array.from({ length: noOfProblems }, (_, index) => (
				<div className="content" key={index}>
					{/* {booleanArray[index] && <div className="div1">{counter}</div>} */}
					{booleanArray[index] && <Counter setGoToIndex={setGoToIndex} setIsDone={setIsDone} invokeCounter={invokeCounter} setInvokeCounter={setInvokeCounter} setTimerDone={setTimerDone} setCounter={setCounter} counter={counter} />}
					<div className="div2">
						<div className="left">Icon</div>
						<div className="right">
							<label htmlFor="operand1" title="operand1" className="content box">
								<span className="name">{firstOperands[index]}</span>
							</label>
							<label htmlFor="operand2" title="operand2" className="content box">
								<span className="name">{secondOperands[index]}</span>
							</label>
						</div>
					</div>
					<SubProblem displayResult={displayResult} setDisplayResult={setDisplayResult} goToNextOne={goToNextOne} noOfProblems={noOfProblems} isDone={isDone} totalResult={totalResult} setIsDone={setIsDone} booleanArray={booleanArray} displayResultArray={displayResultArray}
						index={index} />

				</div>
			))}
		</div>
	);
}
