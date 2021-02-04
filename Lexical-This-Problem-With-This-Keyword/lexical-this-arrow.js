const obj={
	name:'MOHSIN',
	print:function()
	{
		setTimeout(()=>{
			console.log(this);
		},1000);
	}
}

obj.print();

