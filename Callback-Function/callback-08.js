var me={
	name:'MOHSIN',
	age:15,
	email:'msnju2010@gmail.com'
}

function preparation(person,callback)
{
  console.log('My Name is:'+person.name+'My Age is:'+person.age+'My Mail is:'+person.email);
  if(person.age>=20)
  {
  	callback(person.email);
  }

  else
  {
    console.log('You Are Too Little');
  }
}
function print(email)
{
   console.log('Email Is Sent To:'+email);
}
preparation(me,print);