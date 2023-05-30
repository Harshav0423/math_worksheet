import Options from "./options/options";
import Selection from "../Selection/selection";
import styles from "./home.module.css";
import Problem from "./problem/problem";
import { useEffect, useState } from "react";
import { getProblems } from "../api/apis/api";
import axios from "axios";
// type objectProps = {
// 	noOfProblems: number;
// 	minNumber: number;
// 	maxNumber: number;
// 	timePerProblem: number;
// };
// type selectionObject = {
// 	obj:objectProps;
// }
function Home() {
	let [noOfProblems, setNoOfProblems] = useState(50);
	let [minNumber, setMinNumber] = useState(100);
	let [maxNumber, setMaxNumber] = useState(1000);
	let [timePerProblem, setTimePerProblem] = useState(60);

	const [operation, setOperation] = useState("");
	const [problems, setProblems] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [change, setChange] = useState(0);
	useEffect(() => {


		if (operation !== "") {
			console.log("from home", operation, noOfProblems, minNumber, maxNumber, timePerProblem, change);
			setChange(change + 1);
		}
	}, [operation, noOfProblems, minNumber, maxNumber, timePerProblem]);
	const [selectionObject, setSelectionObject] = useState({
		noOfProblems: 50,
		minNumber: 100,
		maxNumber: 1000,
		timePerProblem: 60,
	});
	const [selectionFunction, setSelectionFunction] = useState({
		setNoOfProblems: setNoOfProblems,
		setMinNumber: setMinNumber,
		setMaxNumber: setMaxNumber,
		setTimePerProblem: setTimePerProblem
	})

	useEffect(() => {
		const payload = {
			min: minNumber,
			max: maxNumber,
			count: noOfProblems,
			operator: operation
		}
		async function fetchData() {
			if (operation !== "") {

				let temp_obj = await axios.post(`http://localhost:3100/calculate`, payload).then((res) => {
					console.log(res.data, res.data.problem);
					return res.data.problem;
				});
				setProblems({ ...temp_obj, noOfProblems: noOfProblems, operation: operation, timePerProblem: timePerProblem });
				setIsLoading(true);
			}
		}

		// setSelectionObject([...temp_obj, 'timePerProblem': timePerProblem])

		fetchData();
	}, [change]);



	return (
		<div className={styles.container}>
			<div className={styles.left_part}>
				<Options></Options>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.right_part}>
				<div className={styles.middle_part}>
					<Selection operation={operation} setOperation={setOperation} selectionObject={selectionObject} selectionFunction={selectionFunction} />
				</div>
				<div className={styles.liner}>Solve here!</div>
				<div className={styles.bottom_part}>
					{isLoading && <Problem payload={problems} selectionObject={selectionObject} />}
				</div>
			</div>
		</div>
	);
}
export default Home;
