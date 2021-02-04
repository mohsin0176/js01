function hello(name)
{
	this.name=name;
}

hello.prototype.print=function()
{
	console.log(this.name);
}

var x=new hello('MOHSIN');
var y=new hello('JAYEED');

x.print();
y.print();