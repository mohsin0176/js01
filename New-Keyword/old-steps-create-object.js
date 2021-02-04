
function Animal(name)
{
	this.name=name;
}

function hello(constructor)
{
	var obj={};//----01

	Object.setPrototypeOf(obj,constructor.prototype); ///copy animal fun-element to object---02
	var x=Array.prototype.slice.apply(arguments);

	constructor.apply(obj,x.slice(1)); //add apply method to animal function---03

	return obj;//-----04
}

var y=hello(Animal,'cat','dog');
 

