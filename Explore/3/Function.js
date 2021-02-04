function operation(a,b)
{
	var c=a+b;
	var d=a-b;

	add(c,d);
}

function add(c,d)
{
	var result=c+d;
	console.log(result);
}

operation(50,5);