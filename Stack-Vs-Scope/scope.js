var a=10;
A();
function A()
{   
	var b=5;
	B();
	function B()
	{   
		var c=15;
		C();
		function C()
		{
        var d=20;
        console.log(a+b+c+d);
		}
	}
}