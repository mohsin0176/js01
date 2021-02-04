function outer()
{
	function inner()
	{
		console.log(this);
	}
	new inner();
}
outer();