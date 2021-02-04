function example()
{
	return {
			name:'MOHSIN',
			skill:['php','c++','java'],
			print:function(){
				console.log('Name is:'+this.name+' And '+'Skill is:'+this.skill);
							}
		   }
}

var x=example();
x.print();
