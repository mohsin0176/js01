var book={
	name:'mohsin',
	year:2018,
	author:'hk jakir',
	print:function(){
		console.log(this.name,this.year,this.author,this.print);
	}
}


book.year=1999;
book['name']='Sayeed';
book.print();
console.log('Book Name:'+book.name);
console.log('Year is:'+book['year']);