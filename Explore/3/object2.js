var person=
{
	name:'MOHSIN',
	age:22,
	skill:['php','java','c++','c'],
	print:function()
	{

		console.log('Name:'+this.name+'Age:'+this.age+'Skill:'+this.skill);
	}
}

person.name='MD.MOHSIN';
person.print();