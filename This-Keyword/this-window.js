function outer()
{
	function inner()
	{
		console.log(this);
	}
	inner();
}
outer();