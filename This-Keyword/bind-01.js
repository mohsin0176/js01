function add(a)
{
	return this.value+a;
}
var obj1={
	value:10
}
var obj2={
	value:30
}

var x=add.bind(obj1);//a=20
var result=x(20);
console.log(result);