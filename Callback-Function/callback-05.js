function hello(name,print)
{
print(name);	
}



hello('MOHSIN',function (name)
{
	console.log('Hi I Am :'+name);
});


hello('NAYEEM',function (name)
{
	console.log('Hi I Am :'+name);
});

hello('JAKARIA',function (name)
{
	console.log('Hi I Am :'+name+' And '+'My Name Length is :'+name.length);
});