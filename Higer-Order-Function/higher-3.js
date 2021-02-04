function hello()
{
	return function(name)

	{
		return 'Your Name is : '+name;
	}
}

var x=hello();
var p=x('MOHSIN');
console.log(p);

///  It is higher order function like power - base

///  higher order function has no inner-outer function rule