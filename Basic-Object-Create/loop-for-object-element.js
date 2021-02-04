var book={
	name:'mohsin',
	year:2018,
	author:'hk jakir',
	print:function(){
		console.log(this.name,this.year,this.author,this.print);
	}
}

for(var element in book)
{
	console.log(element);
}

