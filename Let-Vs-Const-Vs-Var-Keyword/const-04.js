function demo(){

	let x=10;
	{
		const x=15;
		console.log(x);
	}
	 
	console.log(x);
 
}
demo();