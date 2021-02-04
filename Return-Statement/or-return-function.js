function hello(firstname,lastname,gender)
{

if (gender=='male') 
	{
    var output='Mr.'+firstname+'-'+lastname;
    return output;
	}
else(gender=='female') 
	{
    var output='Mrs.'+firstname+'-'+lastname;
    return output;
	}
	

}
var x=hello('MOHSIN','JAYEED','male');
console.log(x);

//Outer Function Can Not Access Inner Function Variable
//Inner Function Can Access Outer Function Variable

//But Here Return variable is not a variable of outer-inner function is a part of hello function

