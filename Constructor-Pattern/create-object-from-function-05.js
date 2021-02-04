function person(name,email)
{
	this.name=name;
	this.email=email;
	this.print=function()
	{
		console.log('Name is :'+this.name);
	}
}
var p1=new person('mohsin','msnju2010@gmail.com');
var p2=new person('mayen','bnju2010@gmail.com');
var p3=new person('sayeed','cnnju2010@gmail.com');

var people=[p1,p2,p3];

 for(var element in people)
 {
   console.log(people);
 }