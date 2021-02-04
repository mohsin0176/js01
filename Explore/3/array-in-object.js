 var person={
 	name:'MOHSIN',
 	age:25,
 	skill:['php','java','css','html'],
 	print:function()
 	{
 		console.log(this.name+''+this.age+''+this.skill)
 	}
 }

 for(var i in person)
 {
 	console.log(person[i]);
 }