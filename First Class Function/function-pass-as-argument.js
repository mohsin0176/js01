function sayName(name)
{
	return 'Hello,'+name;
}
function wow(name,sayName)
{
	return sayName(name);
}

var result=wow('MOHSIN',sayName);
console.log(result);