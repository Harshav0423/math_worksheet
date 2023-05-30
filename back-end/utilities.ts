export default async function randomNumberGenerator(
	start: number,
	end: number,
	count: number
): Promise<number[]> {
	console.log("Im invoked", typeof start, typeof end, typeof count);
	var numbers: number[] = [];
	for (let i = 0; i < count; i++) {
		numbers.push(Math.floor(Math.random() * (end - start + 1)) + start);
	}
	return numbers;
}
