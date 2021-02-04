function print()
{
	console.log('Hello:'+this.name+'Email:'+this.email);
}

var obj1=
{
name:'MOHSIN',
email:'msnju2010@gmail.com'
}


var obj2=
{
name:'SAYEED',
email:'hjkju2010@gmail.com'
}

print.call(obj1);
print.call(obj2);