function host()
{
	console.log('I Am Host Function');

	return function()
	{
    console.log('I Am Child Function');
	}
}
host();