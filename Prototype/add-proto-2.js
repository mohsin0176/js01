function person(name,age)
{
	this.name=name;
	this.age=age;
	this.print=function()
	{
		console.log('Your Email is:'+this.email);
	}

}
person.prototype.email='msnju2010@gmail.com';

var p1=new person('MOHSIN',20);
p1.print();