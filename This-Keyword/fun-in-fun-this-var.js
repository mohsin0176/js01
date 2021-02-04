var person={
	name:'MOHSIN',
	print:function()
	{   
		console.log(this.name);
		setTimeout(function(){
			console.log('Hello:'+this.name)},5000);
	}
}
person.print();