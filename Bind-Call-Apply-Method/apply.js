function add(a,b)
{
	return (a+b)*this.c;
}
obj1=
{
	c:30
}
obj2=
{
	c:50
}
var result=add.call(obj1,10,20);
var result1=add.call(obj2,10,20);
console.log(result);
console.log(result1);
