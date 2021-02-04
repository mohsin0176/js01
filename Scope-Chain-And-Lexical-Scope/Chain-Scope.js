var a=100;

console.log(a);

function A()
{   
	var a=300;
	console.log(a);


	function B()
	{
       var b=200;
       console.log(a);
       console.log(b);

       function C()
       {
       console.log(a);
       }
       C();
	}
	B();
}


A();