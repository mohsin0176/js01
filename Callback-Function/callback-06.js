var me={
	name:'MOHSIN',
	age:25,
	email:'msnju2010@gmail.com'
}

function preparation(person,callback)
{
  console.log('My Name is:'+person.name+'My Age is:'+person.age+'My Mail is:'+person.email);
  if(person.age>=20)
  {
  	callback(person.email);
  }
}
function print(email)
{
   console.log('Email Is Sent To:'+email);
}
preparation(me,print);