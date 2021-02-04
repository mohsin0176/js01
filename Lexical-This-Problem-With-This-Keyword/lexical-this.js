const obj={
	name:'MOHSIN',
	print:function()
	{
		setTimeout(function()
		{
			console.log(this);
		},1000);
	}
}

obj.print();