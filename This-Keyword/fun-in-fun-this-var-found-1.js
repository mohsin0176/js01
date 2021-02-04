var person={
	name:'MOHSIN',
	print:function()
	{   
		
		setTimeout(function(){
			console.log('Hello:'+this.name)}.bind(this),5000);
	}
}
person.print();

///when function in function in object-to get access use bind method that means function in object