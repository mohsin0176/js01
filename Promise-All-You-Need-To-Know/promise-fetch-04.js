fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> console.log(response.json()) )
.then((body)=>{
	 body.map(data=>console.log(data.name));
})
.catch((err)=>console.log(err))