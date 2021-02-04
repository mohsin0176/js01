const obj={
	name:'MOHSIN',
	print:function()
	{
		setTimeout(()=>{
			console.log(this);
		}.bind(this),1000);
	}
}

obj.print();
