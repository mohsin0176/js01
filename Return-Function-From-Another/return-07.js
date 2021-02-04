function greetings(msg)
{
	return function(name)
	{
		console.log(msg+''+name);
	}
}

var good=greetings('Good Morning');
var hello=good('MOHSIN');
console.log(hello);