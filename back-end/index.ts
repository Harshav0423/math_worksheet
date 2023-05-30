import express, { Application, Request, Response } from "express";
import randomNumberGenerator from "./utilities";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

const app: Application = express();
// var bodyParser = require('body-parser');

const port = 3100;
// var jsonParser = bodyParser.json();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
	return res.status(200).send({
		message: "Hello World!",
	});
});

// Error
try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: `);
}

// problems - nums1 -> firstOperand, nums2 -> secondOperand, operator - [], results - []

app.post("/calculate", async (req: Request, res: Response) => {
	let problem: {
		firstOperand: number[];
		secondOperand: number[];
		// operators: string[],
		results: number[];
	};
	let { min, max, count, operator } = req.body;
	const firstOperand: number[] = await randomNumberGenerator(min, max, count);
	const secondOperand: number[] = await randomNumberGenerator(min, max, count);
	let results: number[] = [];
	operator = operator.toLocaleLowerCase();
	for (let i = 0; i < count; i++) {
		switch (operator){
			case 'division':
				results.push(Math.trunc(firstOperand[i] / secondOperand[i]));
				break;
			case 'subtraction':
				results.push(firstOperand[i] - secondOperand[i]);
				break;
			case 'multiplication':
				results.push(firstOperand[i] * secondOperand[i]);
				break;
			default:
				results.push(firstOperand[i] + secondOperand[i]);
				break;
		}
		// results.push(firstOperand[i] + secondOperand[i]);
	}
	console.log(req.body, firstOperand, secondOperand, results);
	problem = { firstOperand, secondOperand, results };
	res.status(200).send({ message: "received", problem });
});
