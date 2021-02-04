function person(name,age)
{
	this.name=name;
	this.age=age;
	this.print=function()
	{
		console.log('Your Name is:'+this.name+'Your Age is:'+this.age);
	}
}

var p1=new person('MOHSIN',20);
p1.print();