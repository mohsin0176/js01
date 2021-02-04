function greetings(msg)
{
	return function(name)
	{
		console.log(msg+'-'+name);
	}
}

var good=greetings('Good Morning');
var hello=greetings('Good Evening');

good('MOHSIN');
hello('NAYEEM');