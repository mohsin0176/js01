function base(b)
{
	return function(n)
	{
		var result=1;
		for(var i=0;i<b;i++)
		{
             result=result*n;
		}
		return result;
	}
}

var power=base(2);
var result=power(10);
var fall=base(2)(10);
console.log(result);
console.log(fall);