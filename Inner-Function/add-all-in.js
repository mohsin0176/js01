function out(a,b)
{
	function add()
	{
		return a+b;
	}
	function sub()
	{
		return a-b;
	}
	function mul()
	{
		return a*b;
	}
	function div()
	{
		return a/b;
	}

	return add()+sub()+mul()+div();
}

var x=out(10,15);
console.log(x);

//Outer Function Can Not Access Inner Function Variable
//Inner Function Can Access Outer Function Variable