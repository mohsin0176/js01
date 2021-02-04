fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> console.log(response.json()) )
.then((body)=>{
	console.log(body);
})
.catch((err)=>console.log(err))