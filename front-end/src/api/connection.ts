import axios from "axios";

const AX = axios.create({
	baseURL: "http://localhost:3100",
});

AX.interceptors.response.use(
	function (response) {
		console.log("connection established");

		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default AX;
