fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> console.log(response.json())  )
.catch((err)=>console.log(err))