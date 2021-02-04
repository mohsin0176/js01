function out()
{
	function inn()
	{
		console.log('I Am Inner Function');
	}

	console.log('I Am Outer Function');
}

out();

inn();

//Outer Function Can Not Access Inner Function Variable
//Inner Function Can Access Outer Function Variable