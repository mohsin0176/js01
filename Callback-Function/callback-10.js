
var me={
	name:'MOHSIN',
	age:12,
	email:'msnju2010@gmail.com'
}
function preparation(person,callback1,callback2)
{
	console.log('Your Name is:'+person.name+'Your Age is:'+person.age+'Your Email is:'+person.email);
	if (person.age>=10)
	{
		callback1(person.email);
		callback2(person.email);
	}
}
function print1(email)
{
  console.log(email.toUpperCase());
}
function print2(email)
{
  console.log(email.toLowerCase());
}
preparation(me,print1,print2);