let myFirstPromise = new Promise((resolve,reject)=>{
	let name='MOHSIN';
	
	setTimeout(()=>resolve(name),3000);
})

myFirstPromise
.then((name)=>{
	console.log('We are-'+nam);
})
.catch((err)=>{
	console.log('Output Error');
})