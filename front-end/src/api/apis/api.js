import AX from "../connection";
import axios from "axios";

export async function getProblems(payload) {
	// const payload = {
	// 	min: 100,
	// 	max: 1000,
	// 	count: 50,
	// };

  return await axios.post(`http://localhost:3100/calculate`, payload).then((res)=> {
    console.log(res.data, res.data.problem);
	return res.data.problem;
  })
	// return AX.post("/calculate", payload).then((res) => {
	// 	console.log(res);
	// });

}
