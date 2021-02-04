const obj={
	name:'MOHSIN',
	print:function()
	{
		setTimeout(function()
		{
			console.log(this);//bind only this print function
		}.bind(this),1000); // bind whole object property
	}
}

obj.print();