function add(a,b)
{
	return a+b;
	
}

add(10,12);

console.log('===============================');
console.log('===============================');
console.log('===============================');

function print(a,b)
{
	console.log(a+b);
	
}

print(10,12);

console.log('===============================');
console.log('===============================');
console.log('===============================');

var result=function (a,b)
{
	return a+b;
	
}

var math=result;
console.log(result(10,12));
console.log(math(150,162));