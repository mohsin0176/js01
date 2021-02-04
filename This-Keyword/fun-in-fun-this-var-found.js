var person={
	name:'MOHSIN',
	print:function()
	{   
		console.log(this.name);
		var name=this.name;
		setTimeout(function(){
			console.log('Hello:'+name)},5000);
	}
}
person.print();