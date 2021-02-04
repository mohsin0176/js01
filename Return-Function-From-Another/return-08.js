function greetings(msg)
{
	return function(name)
	{
		console.log(msg+''+name);
	}
}

var good=greetings('Good Morning')('MOHSIN');
console.log(good);