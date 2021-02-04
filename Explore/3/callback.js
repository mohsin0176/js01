function operation(a,b,callback)
{
	var c=a+b;
	var d=a-b;

	callback(c,d);
}

function add(c,d)
{
	
	console.log(c+d);
}
function sub(c,d)
{
	
	console.log(c-d);
}
function mul(c,d)
{
	
	console.log(c*d);
}
function div(c,d)
{
	
	console.log(c/d);
}

operation(50,5,add);
operation(50,5,sub);
operation(50,5,mul);
operation(50,5,div);