function print()
{
	console.log('Hello:'+this.name);
}

var obj1=
{
name:'MOHSIN',
}


var obj2=
{
name:'SAYEED',
}

var result=print.bind(obj1);
var result1=print.bind(obj2);

result();
result1();