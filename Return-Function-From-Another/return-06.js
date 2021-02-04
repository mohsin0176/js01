function host()
{
	console.log('I Am Host Function');

	function child()
	{
    console.log('I Am Child Function');
	}
	return child;
}
var a=host();
console.log(a());