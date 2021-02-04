function add(a,b)
{
	return (a+b)*this.c;
}

var obj1={
	c:30
}
var obj2={
	c:50
}
var result=add.call(obj1,10,40);
console.log(result);
var result1=add.apply(obj1,[10,40]);
console.log(result1);